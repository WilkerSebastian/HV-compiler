#include "../include/Gaveteiro.hpp"
#include <iostream>
#include <cstdlib>
#include <cstdint>
#include <string>
#include <system_error>

void Gaveteiro::carga(std::vector<std::string> registros) {

    for(uint16_t i = 0;i < registros.size();i++) {

        this->gavetas[i] = registros[i];
        this->restritos.push_back(i);

    }

}

void Gaveteiro::registrar(uint16_t endereco, std::string valor) {

    for(uint16_t restrito : this->restritos) {

        if (restrito == endereco) {

            std::string conteudo = this->ler(endereco);

            std::cerr << "\nErro tentativa de sobrescrita de gaveta que armazena código fonte\nconteudo da gaveta(): " << conteudo << "\n";
            exit(1);
        
        }

    }

    this->gavetas[endereco] = valor;

}

std::string Gaveteiro::ler(uint16_t endereco) {

    if (endereco > 99) {

        std::cerr << "Erro na leitura do gaveteiro no endereço " << endereco << " , tentativa de registro em endereço inexistente\n";
        exit(1);
        
    }

    return this->gavetas[endereco];

}