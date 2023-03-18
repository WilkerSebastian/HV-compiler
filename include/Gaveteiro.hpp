#ifndef GAVETEIRO_HPP
#define GAVETEIRO_HPP
#define MAX_ACCESS 100
#include <stdint.h>

class Gaveteiro {

private:

    uint16_t gavetas[MAX_ACCESS];

public:

    void registrar(uint8_t endereco, uint16_t valor);

};

#endif