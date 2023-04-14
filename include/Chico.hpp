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

        void cpEE(Calculadora &calculadora, Gaveteiro gaveteiro, int16_t endereco);
 
        void cpAC(Calculadora calculadora, Gaveteiro &gaveteiro,int16_t endereco);

        void some(Calculadora &calculadora, Gaveteiro gaveteiro, int16_t endereco);

        void subtraia(Calculadora &calculadora, Gaveteiro gaveteiro, int16_t endereco);

        void multiplique(Calculadora &calculadora, Gaveteiro gaveteiro, int16_t endereco);

        void divida(Calculadora &calculadora, Gaveteiro gaveteiro, int16_t endereco);

        void se(Calculadora calculadora, EPI &epi, int16_t endereco);

        void leia(Gaveteiro &gaveteiro, PortaCartoes pc, int16_t endereco);

        void escreva(Gaveteiro gaveteiro, FolhaDeSaida fs, int16_t endereco);

        void para(EPI &epi, int16_t endereco);

        void constante(Calculadora &calculadora, int16_t valor);

        void pare();

};

#endif