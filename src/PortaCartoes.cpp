#include "../include/PortaCartoes.hpp"
#include <stdint.h>
#include <iostream>
#include <string>
#include <fstream>

uint16_t PortaCartoes::lerCartao(uint8_t endereco) {

     std::ifstream input_file("./cartoes/cartao" + std::to_string(endereco) + ".ct");

     std::string line;

    if (input_file.is_open()) {

        std::getline(input_file, line);

        input_file.close();

    } else {
        std::cerr << "Erro ao abrir o cartao " << endereco << "\n";
        exit(1);
    }

    return std::stoi(line);

}