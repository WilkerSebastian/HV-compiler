#include "../include/PortaCartoes.hpp"
#include <iostream>
#include <cstdint>
#include <string>

uint16_t PortaCartoes::lerCartao() {

    std::string input;

    std::cout << "\nInforme o valor de 3 algarimos do cartão: ";
    std::getline(std::cin, input);

    int valor = std::stoi(input);

    if(valor < 0 || valor > 999) {

        std::cerr << "Erro na escrita do gaveteiro, do valor " << valor << ", unico valor aceito é entre 0-999" << "\n";
        exit(1);

    }

    return static_cast<uint16_t>(valor);

}