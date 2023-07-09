#pragma once

#define MAX_ACCESS 100
#include<vector>
#include<string>
#include<cstdint>

class EPI {

    private:

        int16_t valor = 0; // valor é endereco que deve ser lido

    public:

        bool debug;

        void registrar(int16_t registro); // registrar a proxima instrução

        int16_t lerRegistro(); // ler a instrução armazena em valor

};