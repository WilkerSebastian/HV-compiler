#ifndef GAVETEIRO_HPP
#define GAVETEIRO_HPP
#define MAX_ACCESS 100
#include <stdint.h>
#include <string>

class Gaveteiro {

private:

    uint16_t gavetas[MAX_ACCESS];

public:

    std::string historico;

    void registrar(uint8_t endereco, uint16_t valor);

    uint16_t ler(uint8_t endereco);

};

#endif