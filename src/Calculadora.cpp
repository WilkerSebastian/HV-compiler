#include "../include/Calculadora.hpp"
#include <iostream>
#include <stdint.h>

void Calculadora::soma(uint16_t valor) {

    if (valor + this->acumulador > 999){
        
        std::cerr << "Erro na operação " << static_cast<int>(this->acumulador) << " + " <<  valor << " = " << valor + this->acumulador << " , unico valor aceito como resultado é entre 0-999" << "\n";
        exit(1);

    }

    this->acumulador += valor;

}

void Calculadora::acumular(uint16_t valor) {

    std::cout << "valor: " << valor;

    this->acumulador = valor;

}

uint16_t Calculadora::getAcumulador() {

    return this->acumulador;

}