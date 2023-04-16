#include "../include/HVM.hpp"
#include "../include/instructionshv.hpp"
#include <fstream>
#include <iostream>
#include <regex>
#include <sstream>
#include <cstdint>
#include <string>

#define INTERPRETER 0
#define ASSEMBLY 1
#define PARSER 2

void HVM::boot(int mode, std::string path) {
 
  std::string script;

  switch (mode) {

    case INTERPRETER:

        script = this->lerArquivo(path, "hvs");

        break;
    case ASSEMBLY:

        script = this->lerArquivo(path, "ahv");

        this->assembly(script);

        break;
    case PARSER:

        script = this->lerArquivo(path, "hvs");

        this->parser(script);

        break;
  }
}

void HVM::parser(std::string script) {

  std::istringstream iss(script);

  std::string asmhv;

  std::string linha;

  while (std::getline(iss, linha)) {

    asmhv.append(this->assembler(linha).append("\n"));

  }

  this->escreverArquivo("./parser.ahv", asmhv);
  std::cout << "\nParser realizado com sucesso, acesse parser.ahv para ver "
               "resultado!\n";

  exit(0);
}

void HVM::assembly(std::string script) {

    if(this->debug) {

      std::cout << "-------------------------------\n"
                << "DEBUG ASSEMBLY\n"
                << "-------------------------------\n";
    
    }

    this->chico.carregarGaveteiro(this->gaveteiro, script);

    while(true) {

        if(this->debug) {

          std::cout << "-------------------------------\n";

        }

        std::string instrucao = this->chico.proximaInstrucao(this->gaveteiro, this->epi);

        int16_t EE = std::stoi(instrucao.substr(1, 2));

        if (copieValorGavetaEE(instrucao)) {

            this->chico.cpEE(this->calculadora, this->gaveteiro, EE);

        } 
        else if (copieValorAC(instrucao)) {

            this->chico.cpAC(this->calculadora, this->gaveteiro, EE);
        }
        else if (someEEaoAC(instrucao)) {

            this->chico.some(this->calculadora, this->gaveteiro,EE);

        } 
        else if (subtraiaACoEE(instrucao)) {

            this->chico.subtraia(this->calculadora, this->gaveteiro,EE);

        } 
        else if (multipliqueACporEE(instrucao)) {

            this->chico.multiplique(this->calculadora, this->gaveteiro,EE);

        } 
        else if (dividaACporEE(instrucao)) {

            this->chico.divida(this->calculadora, this->gaveteiro,EE);

        } 
        else if (seACmaiorVaParaEE(instrucao)) {

            this->chico.se(this->calculadora, this->epi, EE);

        } 
        else if(leiaValorGuardaGavetaEE(instrucao)) {

          this->chico.leia(this->gaveteiro, this->portaCartoes, EE);

        }
        else if(escrevaEEnaSaida(instrucao)) {

          this->chico.escreva(this->gaveteiro, this->folhaDeSaida ,EE);

        }
        else if(vaParaEE(instrucao)) {

          this->chico.para(this->epi, EE);

        }
        else if(ACrecebeConstante(instrucao)) {

          std::smatch matches;

          std::regex_search(instrucao, matches , std::regex("\\d{1,3}$"));

          EE = std::stoi(matches[0]);

          this->chico.constante(this->calculadora, EE);

        }
        else if(fimDoPrograma(instrucao)) {

          this->chico.pare();

        }
        else {

            std::cerr << "\nerro de sintaxe! comando " << instrucao << "\n";
            exit(1);

        }

        if(this->debug) {

          std::cout << "-------------------------------\n"
                    << "DEBUG LOG\n"
                    << "INSTRUÇÂO: " << instrucao << "\n"
                    << "EE: " << EE << "\n";

        }

    }

}

std::string HVM::assembler(std::string comando) {

  std::string asmhv;

  std::string prefix;

  std::regex pattern("\\D+");

  std::sregex_token_iterator it(comando.begin(), comando.end(), pattern, -1);

  std::sregex_token_iterator end;

  std::vector<std::string> numbers;

  while (it != end) {
    numbers.push_back(*it++);
  }

  /*

  if (carregueCAC(comando)) {

    prefix = "1";

    asmhv = prefix.append(numbers[1]);

  } else if (armazeneCAC(comando)) {

    prefix = "2";

    asmhv = prefix.append(numbers[1]);
  }
  else if (leiaCartaoGuarde(comando)) {

    prefix = "3";

    asmhv = prefix.append(numbers[1]);

  } else if (imprima(comando)) {

    prefix = "4";

    asmhv = prefix.append(numbers[1]);

  } else if (someCEE(comando)) {

    prefix = "5";

    asmhv = prefix.append(numbers[1]);

  } else if (seCACdiferenteEE(comando)) {

    prefix = "6";

    asmhv = prefix.append(numbers[2]);

  } else if (pare(comando)) {

    prefix = "7";

    asmhv = prefix.append("00");

  } else {

    std::cerr << "\nerro de sintaxe! " << comando << "\n";
    exit(1);

  }

  */

  return asmhv;
}

void HVM::escreverArquivo(std::string path, std::string conteudo) {

  try {
    std::ofstream file(path, std::ios::out | std::ios::binary);
    if (!file) {
      throw std::runtime_error("\nerro ao abrir arquivo!\n");
    }
    file.write(conteudo.c_str(), conteudo.size());
    file.close();
  } catch (std::exception &e) {
    std::cerr << "\nErro: " << e.what() << "\n";
    exit(1);
  }
}

std::string HVM::lerArquivo(std::string path, std::string extensao) {

  std::string conteudo;

  if (path.substr(path.find_last_of(".") + 1) != extensao) {
    std::cerr << "A extensão do arquivo nao é compativel. \n";
    exit(1);
  }

  std::ifstream arquivo(path, std::ios::in | std::ios::out | std::ios::binary);
  if (!arquivo.is_open()) {
    std::cerr << "Nao foi possivel abrir o arquivo " << path << "\n";
    exit(1);
  }

  std::string linha;
  while (getline(arquivo, linha)) {
    conteudo += linha + "\n";
  }

  arquivo.close();

  return conteudo;
}

void HVM::setDebug(bool debug) {

  this->debug = debug;
  this->chico.debug = debug;
  this->calculadora.debug = debug;
  this->epi.debug = debug;
  this->folhaDeSaida.debug = debug;
  this->gaveteiro.debug = debug;
  this->portaCartoes.debug = debug;

}