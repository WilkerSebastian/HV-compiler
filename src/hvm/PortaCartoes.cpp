#include "hvm/PortaCartoes.hpp"
#include <stdexcept>
#include <iostream>

void PortaCartoes::inserir(const std::vector<std::string>& cartoes) {

    for (int i = 0; i < cartoes.size(); i++)
        this->conteudo.push(cartoes[i]);

}

std::string PortaCartoes::lerCartao() {

    std::string valor;

    if (this->conteudo.empty()) 
        std::cin >> valor;
    
    else {
        valor = this->conteudo.front();
        this->conteudo.pop();
    }
    
    return valor;

}