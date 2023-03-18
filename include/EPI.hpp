#ifndef EPI_HPP
#define EPI_HPP
#define MAX_ACCESS 100

#include <stdint.h>
#include<vector>
#include<string>

class EPI {

    private:

        std::vector<std::string(*)()> registros;

    public:

        void registrar(std::string(* registro)());

        uint8_t getRegistro(uint8_t endereco);

};

#endif