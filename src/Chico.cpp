#include "../include/Chico.hpp"
#include "../include/instructionshv.hpp"
#include <iostream>
#include <sstream>
#include <regex>
#include <cstdint>
#include <stdint.h>
#include <string>
#include <vector>

void Chico::carregarGaveteiro(Gaveteiro &gaveterio, std::string script) {

    std::string trim(const std::string& str);

    std::istringstream iss(script);

    std::string linha;

    std::vector<std::string> valores;

    int index = 1;

    while (std::getline(iss, linha)) {

        std::string linha_limpa = trim(linha);

        if(isCommand(linha_limpa)) {

            std::cerr << "\nErro comando não identificado, na linha  " << index << " : " << linha << "\n";
            exit(1);

        } 

        valores.push_back(linha_limpa);

        index++;

    }

    gaveterio.carga(valores);

}

std::string Chico::proximaInstrucao(Gaveteiro gaveteiro ,EPI &epi) {

    uint16_t registro_atual = epi.lerRegistro();

    epi.registrar(registro_atual + 1);

    return gaveteiro.ler(registro_atual);
 
}

void Chico::cpEE(Calculadora &calculadora, Gaveteiro gaveteiro, uint16_t endereco) {

    uint16_t valor = static_cast<uint16_t>(std::stoi(gaveteiro.ler(endereco)));

    calculadora.acumular(valor);

}

void Chico::cpAC(Calculadora calculadora, Gaveteiro &gaveteiro, uint16_t endereco) {

    uint16_t acumulador = calculadora.getAcumulador();

    gaveteiro.registrar(endereco, std::to_string(acumulador));

}

void Chico::some(Calculadora &calculadora, Gaveteiro gaveteiro, uint16_t endereco) {

    uint16_t valor = static_cast<uint16_t>(std::stoi(gaveteiro.ler(endereco)));

    calculadora.soma(valor);

}

void Chico::subtraia(Calculadora &calculadora, Gaveteiro gaveteiro, uint16_t endereco) {

    uint16_t valor = static_cast<uint16_t>(std::stoi(gaveteiro.ler(endereco)));

    calculadora.subrtaia(valor);

}

void Chico::multiplique(Calculadora &calculadora, Gaveteiro gaveteiro, uint16_t endereco) {

    uint16_t valor = static_cast<uint16_t>(std::stoi(gaveteiro.ler(endereco)));

    calculadora.multiplicar(valor);

}

void Chico::divida(Calculadora &calculadora, Gaveteiro gaveteiro, uint16_t endereco) {

    uint16_t valor = static_cast<uint16_t>(std::stoi(gaveteiro.ler(endereco)));

    calculadora.divida(valor);

}

void Chico::se(Calculadora calculadora, EPI &epi, uint16_t endereco) {

    if(this->debug) {

        std::cout << "se (" << calculadora.getAcumulador() << " > 0): " << (calculadora.getAcumulador() > 0 ? "verdadeiro" : "falso") << "\n"
        << "EPI redirecionado para " << endereco << "\n";

    }
    if(calculadora.getAcumulador() > 0) {

        epi.registrar(endereco);

    }

}

void Chico::leia(Gaveteiro &gaveteiro, PortaCartoes pc, uint16_t endereco) {

    uint16_t valor = pc.lerCartao();

    gaveteiro.registrar(endereco, std::to_string(valor));

}

void Chico::escreva(Gaveteiro gaveteiro, FolhaDeSaida fs , uint16_t endereco) {

    std::string output = gaveteiro.ler(endereco);

    fs.imprimir(output);

}

void Chico::para(EPI &epi, uint16_t endereco) {

    if (this->debug) {

        std::cout << "EPI redirecionado para " << endereco << "\n";
        
    }
 
    epi.registrar(endereco);

}

void Chico::constante(Calculadora &calculadora, uint16_t valor) {

    calculadora.acumular(valor);

}

void Chico::pare() {

    if(this->debug) {

        std::cout << "\nPrograma finalizado com sucesso\n";

    }

    exit(0);

}


std::string trim(const std::string& str) {

    std::regex pattern(R"(\n|\r|\t|\a|\b|\f|\\)");
    std::string result = std::regex_replace(str, pattern, "");

    // Encontra o primeiro caractere não correspondente
    const auto first = result.find_first_not_of(' ');

    // Se a string não contiver espaços em branco no início, retorna a string original
    if (first == std::string::npos) {
        return result;
    }

    // Encontra a última posição não correspondente
    const auto last = result.find_last_not_of(' ');

    // Retorna a substring que não contém os espaços em branco
    return result.substr(first, last - first + 1);
}