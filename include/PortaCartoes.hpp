#ifndef PORTACARTOES_HPP
#define PORTACARTOES_HPP
#include <stdint.h>
#include <string>

class PortaCartoes {

    private:

        uint8_t pilha = 0;

    public:

        std::string historico;

        uint16_t lerCartao();

};

#endif