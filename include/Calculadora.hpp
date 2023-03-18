#ifndef CALCULADORA_HPP
#define CALCULADORA_HPP

#include <stdint.h>

class Calculadora {

    private:

        uint16_t acumulador;

    public:

        void soma(uint16_t valor);

        uint16_t getAcumulador();

};

#endif