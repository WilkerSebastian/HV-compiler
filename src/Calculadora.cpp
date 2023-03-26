#include "../include/Calculadora.hpp"
#include <iostream>

void Calculadora::soma(uint16_t valor) {

    if(this->debug) {

        std::cout << "\nCALCULADORA DEBUG\n"
        << "ACUMULADOR ATUAL: " << this->getAcumulador() << "\n"
        << "OPERAÇÂO: " << this->getAcumulador() << " + " << valor << " = " << (this->getAcumulador() + valor) << "\n";

    }

    if (valor < 0 ||valor + this->acumulador > 999){
        
        std::cerr << "Erro na operação " << static_cast<int>(this->acumulador) << " + " <<  valor << " = " << valor + this->acumulador << " , unico valor aceito como resultado é entre 0-999" << "\n";
        exit(1);

    }

    this->acumulador += valor;

}

void Calculadora::subrtaia(uint16_t valor) {

    if(this->debug) { 

        std::cout << "CALCULADORA DEBUG\n"
        << "ACUMULADOR ATUAL: " << this->getAcumulador() << "\n"
        << "OPERAÇÂO: " << this->getAcumulador() << " - " << valor << " = " << (this->getAcumulador() - valor) << "\n";

    }

    if (valor < 0 || valor + this->acumulador > 999){
        
        std::cerr << "Erro na operação " << static_cast<int>(this->acumulador) << " - " <<  valor << " = " << valor - this->acumulador << " , unico valor aceito como resultado é entre 0-999" << "\n";
        exit(1);

    }

    this->acumulador -= valor;

}

void Calculadora::multiplicar(uint16_t valor) {

    if(this->debug) {

        std::cout << "CALCULADORA DEBUG\n"
        << "ACUMULADOR ATUAL: " << this->getAcumulador() << "\n"
        << "OPERAÇÂO: " << this->getAcumulador() << " - " << valor << " = " << (this->getAcumulador() - valor) << "\n";

    }

    if (valor < 0 || valor + this->acumulador > 999){
        
        std::cerr << "Erro na operação " << static_cast<int>(this->acumulador) << " * " <<  valor << " = " << valor * this->acumulador << " , unico valor aceito como resultado é entre 0-999" << "\n";
        exit(1);

    }

    this->acumulador *= valor;

}

void Calculadora::divida(uint16_t valor) {

    if(this->debug) {

        std::cout << "CALCULADORA DEBUG\n"
        << "ACUMULADOR ATUAL: " << this->getAcumulador() << "\n"
        << "OPERAÇÂO: " << this->getAcumulador() << " / " << valor << " = " << (this->getAcumulador() / valor) << "\n";

    }

    if (valor < 0 || valor + this->acumulador > 999){
        
        std::cerr << "Erro na operação " << static_cast<int>(this->acumulador) << " / " <<  valor << " = " << valor / this->acumulador << " , unico valor aceito como resultado é entre 0-999" << "\n";
        exit(1);

    }

    this->acumulador /= valor;

}

void Calculadora::acumular(uint16_t valor) {

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

uint16_t Calculadora::getAcumulador() {

    return this->acumulador;

}