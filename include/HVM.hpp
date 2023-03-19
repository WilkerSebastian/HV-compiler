#ifndef HVM_HPP
#define HVM_HPP

#include "./Calculadora.hpp"
#include "./Gaveteiro.hpp"
#include "./Chico.hpp"
#include "./EPI.hpp"
#include "./PortaCartoes.hpp"
#include <stdint.h>
#include <string>

class HVM {

    private:

        Calculadora calculadora;
        Chico chico;
        EPI epi;
        Gaveteiro gaveteiro;
        PortaCartoes portaCartoes;
        int8_t mode; 

    public:
        HVM();

        std::string lerArquivo(std::string extensao);

};

#endif