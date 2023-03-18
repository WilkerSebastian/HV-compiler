#include "../include/EPI.hpp"
#include<iostream>
#include<string>

void EPI::registrar(std::string(* registro)()) {

    if (registros.size() > 99) {

        std::cerr << "Erro de sobrecarga da pilha, limite de 100 registros" << "\n";
        exit(1);
        
    }

    this->registros.push_back(registro);

}

uint8_t EPI::getRegistro(uint8_t endereco) {

    if (endereco > 99 || endereco < 0) {

        std::cerr << "Erro na leitura do EPI, tentativa de registro em endereço inexistente" << "\n";
        exit(1);
        
    }

    return std::stoi(this->registros[endereco]());

}