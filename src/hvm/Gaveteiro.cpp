#include <stdexcept>
#include <iostream>
#include "hvm/Gaveteiro.hpp"
#include "hvm/PortaCartoes.hpp"

Gaveteiro::Gaveteiro(int maxGavetas) {
    this->gavetas = std::vector<std::string>(maxGavetas);
    this->ultimoRestrito = 0;
}

std::vector<std::string> Gaveteiro::getGavetas() {
    return this->gavetas;
}

void Gaveteiro::carga(PortaCartoes& portaCartao) {
    
    int index = 0;
    bool final = false;

    while (!final) {

        std::string cartao = portaCartao.lerCartao();

        if (!cartao.empty()) {
            this->registrar(index, cartao);
            final = cartao == "000";
        } else {
            throw std::runtime_error("Falha na carga do porta cartões para gaveteiro");
        }

        index++;
    }

    this->ultimoRestrito = index;
}

void Gaveteiro::registrar(int endereco, const std::string& valor) {

    if (endereco + 1 >= this->gavetas.size()) {
        throw std::runtime_error("Erro de sobrecarga de gavetas, limite de " + std::to_string(this->gavetas.size()) + " registros");
    } else {
        if (endereco < this->ultimoRestrito && this->ultimoRestrito > 0) {
            const std::string& conteudo = ler(endereco);
            throw std::runtime_error("Erro tentativa de sobrescrita de gaveta que armazena código fonte conteúdo da gaveta(" + std::to_string(endereco) + "): " + conteudo);
        }

        int numericValue = std::stoi(valor);

        if (numericValue < 0 || numericValue > 999) {
            throw std::runtime_error("Valor inválido de escrita na gaveta [" + std::to_string(endereco) + "]: " + std::to_string(numericValue));
        }
    }

    this->gavetas[endereco] = valor;
}

std::string Gaveteiro::ler(int endereco) {
    if (endereco < 0 || endereco >= this->gavetas.size() || this->gavetas[endereco].empty()) {
        throw std::runtime_error("Erro na leitura do gaveteiro no endereço " + std::to_string(endereco) + ", tentativa de leitura em endereço inexistente");
    }

    return this->gavetas[endereco];
}
