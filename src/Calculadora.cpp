#include "../include/Calculadora.hpp"
#include <iostream>
#include <stdint.h>

void Calculadora::soma(uint16_t valor) {

    if (valor + this->acumulador > 999){
        
        std::cerr << "Erro na operação, unico valor aceito como resultado é entre 0-999" << "\n";
        exit(1);

    }

}

uint16_t Calculadora::getAcumulador() {

    return this->acumulador;

}