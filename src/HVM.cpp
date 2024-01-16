#include "HVM.hpp"
#include "instructionshv.hpp"
#include <fstream>
#include <iostream>
#include <regex>
#include <sstream>
#include <string>

void HVM::boot(int mode, std::string path) {
 
  std::string script;

  switch (mode) {

    case INTERPRETER:

        script = this->lerArquivo(path, "hvs");

        break;
    case ASSEMBLY:

        script = this->lerArquivo(path, "ahv");
        assembly(script);

        break;
    case PARSER:

        break;
  }
}


void HVM::assembly(std::string script) {

    if(this->debug) {

      std::cout << "-------------------------------\n"
                << "DEBUG ASSEMBLY\n"
                << "-------------------------------\n";
    
    }

    this->chico.carregarGaveteiro(this->gaveteiro, script); // inciando gaveteiro

    while(true) {

      if(this->debug) {

        std::cout << "-------------------------------\n";

      }

    std::string instrucao = this->chico.proximaInstrucao(this->gaveteiro, this->epi); // pegando qual instrução deve ser executada

    int16_t EE = std::stoi(instrucao.substr(1, 2)); // toda instrução que usa EE tem como pardrão XEE, estou retirando somente a parte do EE

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

      std::regex_search(instrucao, matches , std::regex("\\d{1,3}$")); // regex para retirar os 3 digitos do 0-XXX

      EE = std::stoi(matches[0]);

      this->chico.constante(this->calculadora, EE);

    }
    else if(fimDoPrograma(instrucao)) {

      this->chico.pare();

    }
    else {

        std::cerr << "\nerro de sintaxe! comando " << instrucao << "\n";
        exit(EXIT_FAILURE);

    }
    if(this->debug) {

      std::cout << "-------------------------------\n"
                << "DEBUG LOG\n"
                << "INSTRUÇÂO: " << instrucao << "\n"
                << "EE: " << EE << "\n";

    }

  }

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
    exit(EXIT_FAILURE);
  }
}

std::string HVM::lerArquivo(std::string path, std::string extensao) {

  std::string conteudo;

  if (path.substr(path.find_last_of(".") + 1) != extensao) { // verificação se a extensão é a correta
    std::cerr << "A extensão do arquivo nao é compativel. \n";
    exit(EXIT_FAILURE);
  }

  std::ifstream arquivo(path, std::ios::in | std::ios::out | std::ios::binary);
  if (!arquivo.is_open()) {
    std::cerr << "Nao foi possivel abrir o arquivo " << path << "\n";
    exit(EXIT_FAILURE);
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