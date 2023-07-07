#pragma once

#define MAX_ACCESS 100
#include<vector>
#include<string>
#include<cstdint>

class EPI {

    private:

        int16_t valor = 0;

    public:

        bool debug;

        void registrar(int16_t registro);

        int16_t lerRegistro();

};