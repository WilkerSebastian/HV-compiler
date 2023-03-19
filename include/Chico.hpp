#ifndef CHICO_HPP
#define CHICO_HPP

#include <stdint.h>
#include <string>
#include "./PortaCartoes.hpp"

class Chico {


    public:

        uint16_t lerCartao(PortaCartoes pc , std::string);

};

#endif