#include "PortaCartoes.hpp"
#include <iostream>
#include <string>
 
int16_t PortaCartoes::lerCartao() {

    int valor;

    if (this->conteudo.empty()) {
        
        std::string input;

        std::cout << "\nInforme o valor de 3 algarimos do cartão: ";
        std::getline(std::cin, input);

        valor = std::stoi(input);

        if(this->debug) {

            std::cout << "ENTRADA DE CARTÂO\n"
            << "valor recebido: " << input << "\n";

        }

    }
    
    return static_cast<int16_t>(valor);

}

void PortaCartoes::inserirCartao(int16_t valor) {

    if (valor < 0 || valor > 999) {

        std::cerr << "Erro na escrita do gaveteiro, do valor " << valor << ", unico valor aceito é entre 0-999" << "\n";
        exit(EXIT_FAILURE);        

    }
    

    this->conteudo.push(valor)

}
