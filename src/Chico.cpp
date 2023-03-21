#include "../include/Chico.hpp"
#include <iostream>
#include <sstream>
#include <stdint.h>

std::string Chico::carregarEPI(std::string script) {

    std::istringstream iss(script);

    std::string linha;

    uint8_t index = 0;

    while (std::getline(iss, linha)) {

        this->epi.registrar(index , linha);

        index++;

    }

    return this->epi.lerRegistro();

}

std::string Chico::proximaInstrucao() {

    return this->epi.lerRegistro();

}

void Chico::carregue(uint8_t endereco) {

    std::cout << "carregue: " << this->gaveteiro.ler(endereco) << "\n";

    uint16_t valor = this->gaveteiro.ler(endereco);

    this->calculadora.acumular(valor);

}

void Chico::armazene(uint8_t endereco) {

    uint16_t valor = this->calculadora.getAcumulador();

    this->gaveteiro.registrar(endereco, valor);

}

void Chico::lerCartao(uint8_t endereco) {
 
    uint16_t valor = this->portaCartoes.lerCartao();

    this->gaveteiro.registrar(endereco, valor);

}

void Chico::imprime(uint8_t endereco) {

    uint16_t out = this->gaveteiro.ler(endereco);

    std::cout << out << "\n";

}

void Chico::some(uint8_t endereco) {

    uint16_t valor = this->gaveteiro.ler(endereco);

    calculadora.soma(valor);

}

void Chico::se(uint8_t endereco) {

    if(this->calculadora.getAcumulador() != 0) {

        this->epi.gotoRegistro(endereco);

    }

}

void Chico::pare() {

    exit(0);

}