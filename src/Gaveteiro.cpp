#include "Gaveteiro.hpp"
#include <iostream>
#include <cstdlib>
#include <string>
#include <system_error>

void Gaveteiro::carga(std::vector<std::string> registros) {

    if(this->debug) {

        std::cout << "INICIANDO PROCESSO DE CARGA\n"
                  << "---------------------------\n";

    }

    for(size_t i = 0;i < registros.size();i++) {

        if(this->debug) {

            std::cout << i << ": " << registros[i] <<"\n";

        }   

        this->gavetas[i] = registros[i];
        this->restritos.push_back(i);

    }

    if(this->debug) {

        std::cout << "-----------------------------\n" 
                  << "FINALIZANDO PROCESSO DE CARGA\n";
    }

}

void Gaveteiro::registrar(int16_t endereco, std::string valor) {

    if (this->debug) {
        
        std::cout << "GAVETEIRO DEBUG\n"
                  << "gravando na gaveta (" << endereco << ") com valor " << valor << "\n";

    }

    for(int16_t restrito : this->restritos) {

        if (restrito == endereco) {

            std::string conteudo = this->ler(endereco);

            std::cerr << "\nErro tentativa de sobrescrita de gaveta que armazena código fonte\nconteudo da gaveta(): " << conteudo << "\n";
            exit(EXIT_FAILURE);
        
        }

    }

    this->gavetas[endereco] = valor;

}

std::string Gaveteiro::ler(int16_t endereco) {

    if (endereco < 0 || endereco > 99) {

        std::cerr << "Erro na leitura do gaveteiro no endereço " << endereco << " , tentativa de registro em endereço inexistente\n";
        exit(EXIT_FAILURE);
        
    }

    return this->gavetas[endereco];

}