#ifndef EPI_HPP
#define EPI_HPP
#define MAX_ACCESS 100

#include <stdint.h>
#include<vector>
#include<string>

class EPI {

    private:

        int16_t valor = 0;

    public:

        bool debug;

        void registrar(int16_t registro);

        int16_t lerRegistro();

};

#endif