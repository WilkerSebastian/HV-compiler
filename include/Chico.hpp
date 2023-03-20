#ifndef CHICO_HPP
#define CHICO_HPP

#include <stdint.h>
#include <string>
#include "./Calculadora.hpp"
#include "./Gaveteiro.hpp"
#include "./EPI.hpp"
#include "./PortaCartoes.hpp"

class Chico {

    public:

        Calculadora calculadora;
        EPI epi;
        Gaveteiro gaveteiro;
        PortaCartoes portaCartoes;

        std::string carregarEPI(std::string script);

        std::string proximaInstrucao();

        void lerCartao(uint8_t endereco);
 
        void armazene(uint8_t endereco);

        void carregue(uint8_t endereco);

        void imprime(uint8_t endereco);

        void some(uint8_t endereco);

        void se(uint8_t endereco);

        void pare();

};

#endif