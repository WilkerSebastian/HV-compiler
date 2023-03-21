#ifndef EPI_HPP
#define EPI_HPP
#define MAX_ACCESS 100

#include <stdint.h>
#include<vector>
#include<string>

class EPI {

    private:

        uint8_t indexer = 0;

        std::string registros[100];

    public:

        void registrar(uint8_t registro, std::string instrucao);

        void gotoRegistro(uint8_t endereco);

        std::string lerRegistro();

        uint8_t getindexer();

};

#endif