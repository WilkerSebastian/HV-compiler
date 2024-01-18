#include "hvm/PortaCartoes.hpp"
#include <stdexcept>
#include <iostream>

void PortaCartoes::inserir(const std::string cartao) {

    this->conteudo.push(cartao);

}

std::string PortaCartoes::lerCartao() {

    std::string valor;

    if (this->conteudo.empty()) 
        std::cin >> valor;
    
    else
        valor = this->conteudo.front();
        this->conteudo.pop();
    
    return valor;

}