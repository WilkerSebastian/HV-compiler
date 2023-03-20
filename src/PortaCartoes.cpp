#include "../include/PortaCartoes.hpp"
#include <stdint.h>
#include <iostream>
#include <string>
#include <fstream>

uint16_t PortaCartoes::lerCartao() {

    if(this->pilha >= 100) {

        std::cerr << "ultra passou o limite de 100 cartões\n";
        exit(1);

    }

     std::ifstream input_file("./cartoes/cartao" + std::to_string(pilha) + ".ct");

     std::string line;

    if (input_file.is_open()) {

        std::getline(input_file, line);

        input_file.close();

    } else {
        std::cerr << "Erro ao abrir o cartão " << "./cartoes/cartao" + std::to_string(pilha) + ".ct" << "\n";
        exit(1);
    }

    this->pilha++;

    this->historico.append(" " + line);

    return std::stoi(line);

}