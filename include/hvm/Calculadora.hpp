#pragma once

#include<string>

class Calculadora {
    private:
        int acumulador;

    public:
        void soma(int valor);

        void subtraia(int valor);

        void multiplicar(int valor);

        void divida(int valor);

        void acumular(int valor);

        int getAcumulador();
};
