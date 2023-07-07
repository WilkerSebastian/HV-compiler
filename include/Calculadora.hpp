#pragma once
#include<cstdint>

class Calculadora {

    private:

        int16_t acumulador = 0;

    public:
    
        bool debug;

        void soma(int16_t valor);

        void subrtaia(int16_t valor);

        void multiplicar(int16_t valor);

        void divida(int16_t valor);

        void acumular(int16_t valor);

        int16_t getAcumulador();

};