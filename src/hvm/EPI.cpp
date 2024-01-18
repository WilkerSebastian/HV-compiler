#include <stdexcept>
#include "hvm/EPI.hpp"

void EPI::registrar(int registro) {
    
    if (registro < 0) 
        throw std::runtime_error("Erro de sobrecarga da pilha, limite de 100 registros");

    this->valor = registro;
}

int EPI::lerRegistro() const {
    return this->valor;
}