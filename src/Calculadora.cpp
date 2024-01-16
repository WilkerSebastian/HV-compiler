#include "Calculadora.hpp"
#include <iostream>

void Calculadora::soma(int16_t valor) {

    if(this->debug) {
        std::cout << "\nCALCULADORA DEBUG\n"
        << "ACUMULADOR ATUAL: " << this->getAcumulador() << "\n"
        << "OPERAÇÂO: " << this->getAcumulador() << " + " << valor << " = " << (this->getAcumulador() + valor) << "\n";

    }

    if (valor < 0 ||valor + this->acumulador > 999){
        
        std::cerr << "Erro na operação " << static_cast<int>(this->acumulador) << " + " <<  valor << " = " << valor + this->acumulador << " , unico valor aceito como resultado é entre 0-999" << "\n";
        exit(EXIT_FAILURE);

    }

    this->acumulador += valor;

}

void Calculadora::subrtaia(int16_t valor) {

    if(this->debug) { 

        std::cout << "CALCULADORA DEBUG\n"
        << "ACUMULADOR ATUAL: " << this->getAcumulador() << "\n"
        << "OPERAÇÂO: " << this->getAcumulador() << " - " << valor << " = " << (this->getAcumulador() - valor) << "\n";

    }

    if (valor < 0 || valor + this->acumulador > 999){
        
        std::cerr << "Erro na operação " << static_cast<int>(this->acumulador) << " - " <<  valor << " = " << valor - this->acumulador << " , unico valor aceito como resultado é entre 0-999" << "\n";
        exit(EXIT_FAILURE);

    }

    this->acumulador -= valor;

}

void Calculadora::multiplicar(int16_t valor) {

    if(this->debug) {

        std::cout << "CALCULADORA DEBUG\n"
        << "ACUMULADOR ATUAL: " << this->getAcumulador() << "\n"
        << "OPERAÇÂO: " << this->getAcumulador() << " - " << valor << " = " << (this->getAcumulador() - valor) << "\n";

    }

    if (valor < 0 || valor + this->acumulador > 999){
        
        std::cerr << "Erro na operação " << static_cast<int>(this->acumulador) << " * " <<  valor << " = " << valor * this->acumulador << " , unico valor aceito como resultado é entre 0-999" << "\n";
        exit(EXIT_FAILURE);

    }

    this->acumulador *= valor;

}

void Calculadora::divida(int16_t valor) {

    if(this->debug) {

        std::cout << "CALCULADORA DEBUG\n"
        << "ACUMULADOR ATUAL: " << this->getAcumulador() << "\n"
        << "OPERAÇÂO: " << this->getAcumulador() << " / " << valor << " = " << (this->getAcumulador() / valor) << "\n";

    }

    if (valor < 0 || valor + this->acumulador > 999){
        
        std::cerr << "Erro na operação " << static_cast<int>(this->acumulador) << " / " <<  valor << " = " << valor / this->acumulador << " , unico valor aceito como resultado é entre 0-999" << "\n";
        exit(EXIT_FAILURE);

    }

    this->acumulador /= valor;

}

void Calculadora::acumular(int16_t valor) {

    if(this->debug) {

        std::cout << "CALCULADORA DEBUG\n"
        << "ACUMULADOR ATUAL: " << this->getAcumulador() << "\n"
        << "OPERAÇÂO: " << this->getAcumulador() << " = " << valor << "\n";

    }

    if(valor < 0 || valor > 999) {

        std::cerr << "Erro na escrita do acumulador, do valor " << valor << ", unico valor aceito é entre 0-999" << "\n";

    }

    this->acumulador = valor;

}

int16_t Calculadora::getAcumulador() {

    return this->acumulador;

}