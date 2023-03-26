#ifndef CHICO_HPP
#define CHICO_HPP

#include "PortaCartoes.hpp"
#include "EPI.hpp"
#include "FolhaDeSaida.hpp"
#include "Calculadora.hpp"
#include "Gaveteiro.hpp"
#include <cstdint>
#include <string>

class Chico {

    public:

        bool debug;

        void carregarGaveteiro(Gaveteiro &gaveteiro, std::string script);

        std::string proximaInstrucao(Gaveteiro gaveteiro, EPI &epi);

        void cpEE(Calculadora &calculadora, Gaveteiro gaveteiro, uint16_t endereco);
 
        void cpAC(Calculadora calculadora, Gaveteiro &gaveteiro,uint16_t endereco);

        void some(Calculadora &calculadora, Gaveteiro gaveteiro, uint16_t endereco);

        void subtraia(Calculadora &calculadora, Gaveteiro gaveteiro, uint16_t endereco);

        void multiplique(Calculadora &calculadora, Gaveteiro gaveteiro, uint16_t endereco);

        void divida(Calculadora &calculadora, Gaveteiro gaveteiro, uint16_t endereco);

        void se(Calculadora calculadora, EPI &epi, uint16_t endereco);

        void leia(Gaveteiro &gaveteiro, PortaCartoes pc, uint16_t endereco);

        void escreva(Gaveteiro gaveteiro, FolhaDeSaida fs, uint16_t endereco);

        void para(EPI &epi, uint16_t endereco);

        void constante(Calculadora &calculadora, uint16_t valor);

        void pare();

};

#endif