#ifndef CHICO_HPP
#define CHICO_HPP

#include <stdint.h>
#include <string>

class Chico {

    private:

        uint8_t modo;
        std::string script;

    public:

        Chico(uint8_t modo, std::string script);

        void executar();

        void parser();

};

#endif