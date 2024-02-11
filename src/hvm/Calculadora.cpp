#include "hvm/Calculadora.hpp"
#include <iostream>
#include <stdexcept>

void Calculadora::soma(int valor) {
    if (valor < 0 || valor + acumulador > 999) {
        throw std::runtime_error("Erro na operação " + std::to_string(acumulador) + " + " + std::to_string(valor) + " = " + std::to_string(valor + acumulador) + ", único valor aceito como resultado é entre 0-999");
    }

    acumulador += valor;
}

void Calculadora::subtraia(int valor) {
    if (valor < 0 || valor - acumulador > 999) {
        throw std::runtime_error("Erro na operação " + std::to_string(acumulador) + " - " + std::to_string(valor) + " = " + std::to_string(valor - acumulador) + ", único valor aceito como resultado é entre 0-999");
    }

    acumulador -= valor;
}

void Calculadora::multiplicar(int valor) {
    if (valor < 0 || valor * acumulador > 999) {
        throw std::runtime_error("Erro na operação " + std::to_string(acumulador) + " * " + std::to_string(valor) + " = " + std::to_string(valor * acumulador) + ", único valor aceito como resultado é entre 0-999");
    }

    acumulador *= valor;
}

void Calculadora::divida(int valor) {
    
    int integer_value = static_cast<int>(acumulador / valor);

    if (valor < 0 || integer_value > 999) {
        throw std::runtime_error("Erro na operação " + std::to_string(acumulador) + " / " + std::to_string(valor) + " = " + std::to_string(integer_value) + ", único valor aceito como resultado é entre 0-999");
    }
    
    acumulador = integer_value; 
}

void Calculadora::acumular(int valor) {
    if (valor < 0 || valor > 999) {
        throw std::runtime_error("Erro na escrita do valor " + std::to_string(valor) + " no acumulador. Apenas valores entre 0-999 são aceitos.");
    }

    acumulador = valor;
}

int Calculadora::getAcumulador() {
    return acumulador;
}
