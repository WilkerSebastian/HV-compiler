#include "../include/EPI.hpp"
#include<iostream>
#include <iterator>
#include <stdint.h>
#include<string>

void EPI::registrar(uint8_t endereco ,std::string instrucao) {
 
    if (this->indexer > 99) {

        std::cerr << "Erro de sobrecarga da pilha, limite de 100 registros" << "\n";
        exit(1);
        
    }

    this->registros[endereco] = instrucao;

}

std::string EPI::lerRegistro() {

    std::string instrucao = this->registros[this->indexer];

    this->indexer++;

    if (indexer > 99){
        
        std::cerr << "Erro na leitura do EPI, tentativa de registro em endereço inexistente" << "\n";
        exit(1);

    }

    return instrucao;

}
void EPI::gotoRegistro(uint8_t endereco) {

    if (endereco > 99 || endereco < 0) {

        std::cerr << "Erro na leitura do EPI, tentativa de registro em endereço inexistente" << "\n";
        exit(1);
        
    }

    this->indexer = endereco;

}

uint8_t EPI::getindexer() {

    return indexer;

}