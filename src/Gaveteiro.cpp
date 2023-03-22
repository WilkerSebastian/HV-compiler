#include "../include/Gaveteiro.hpp"
#include <iostream>
#include <cstdlib>
#include <cstdint>
#include <string>
#include <system_error>

void Gaveteiro::carga(std::vector<std::string> registros) {

    for(uint16_t i = 0;i < registros.size();i++) {

        this->registrar(i , registros[i]);

    }

}

void Gaveteiro::registrar(uint16_t endereco, std::string valor) {

    this->gavetas[endereco] = valor;

}

std::string Gaveteiro::ler(uint16_t endereco) {

    if (endereco > 99) {

        std::cerr << "Erro na leitura do gaveteiro no endereço " << endereco << " , tentativa de registro em endereço inexistente\n";
        exit(1);
        
    }

    return this->gavetas[endereco];

}