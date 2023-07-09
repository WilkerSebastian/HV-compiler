#pragma once
#include<cstdint>

class Calculadora {

    private:

        int16_t acumulador = 0;

    public:
    
        bool debug;

        void soma(int16_t valor); // operação de soma

        void subrtaia(int16_t valor); // opração de subtração

        void multiplicar(int16_t valor); // operação de multiplicação

        void divida(int16_t valor); // operação de divisão

        void acumular(int16_t valor); // subtituir o valor do acumulador

        int16_t getAcumulador(); // ler o valor do acumulador

};