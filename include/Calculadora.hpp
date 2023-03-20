#ifndef CALCULADORA_HPP
#define CALCULADORA_HPP

#include <stdint.h>

class Calculadora {

    private:

        uint16_t acumulador = 0;

    public:

        void soma(uint16_t valor);

        void acumular(uint16_t valor);

        uint16_t getAcumulador();

};

#endif