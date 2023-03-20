#include "../include/Gaveteiro.hpp"
#include <iostream>
#include <cstdlib>
#include <stdint.h>
#include <string>
#include <system_error>

void Gaveteiro::registrar(uint8_t endereco, uint16_t valor) {

    if (valor > 999){
        
        std::cerr << "Erro na escrita do gaveteiro, unico valor aceito é entre 0-999" << "\n";
        exit(1);

    }

    if (endereco > 99 || endereco < 0) {

        std::cerr << "Erro na escrita do gaveteiro, tentativa de registro em endereço inexistente" << "\n";
        exit(1);
        
    }

    this->gavetas[endereco] = valor;

    this->historico.append(" " + std::to_string(static_cast<int>(endereco)) + ":" + std::to_string(valor));

}

uint16_t Gaveteiro::ler(uint8_t endereco) {

    if (endereco > 99 || endereco < 0) {

        std::cerr << "Erro na escrita do gaveteiro, tentativa de registro em endereço inexistente" << "\n";
        exit(1);
        
    }

    return this->gavetas[endereco];

}