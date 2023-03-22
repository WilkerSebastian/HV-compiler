#ifndef EPI_HPP
#define EPI_HPP
#define MAX_ACCESS 100

#include <stdint.h>
#include<vector>
#include<string>

class EPI {

    private:

        uint16_t valor = 0;

    public:

        void registrar(uint16_t registro);

        uint16_t lerRegistro();

};

#endif