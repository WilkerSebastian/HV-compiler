#include "EPI.hpp"
#include<iostream>
#include<iterator>
#include<string>

void EPI::registrar(int16_t registro) {
 
    if (registro > 99) {

        std::cerr << "Erro de sobrecarga da pilha, limite de 100 registros" << "\n";
        exit(EXIT_FAILURE);
        
    }

    this->valor = registro;

}

int16_t EPI::lerRegistro() {

    return this->valor;

}