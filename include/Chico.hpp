#pragma once

#include "PortaCartoes.hpp"
#include "EPI.hpp"
#include "FolhaDeSaida.hpp"
#include "Calculadora.hpp"
#include "Gaveteiro.hpp"
#include <string>
#include <cstdint>

class Chico {

    public:

        bool debug;

        void carregarGaveteiro(Gaveteiro &gaveteiro, std::string script); // inicializa um gaveiro

        std::string proximaInstrucao(Gaveteiro gaveteiro, EPI &epi); // solicita a EPI a proxima instrução a ser executada

        void cpEE(Calculadora &calculadora, Gaveteiro gaveteiro, int16_t endereco); // AC <- cEE
 
        void cpAC(Calculadora calculadora, Gaveteiro &gaveteiro,int16_t endereco); // EE <- cAC

        void some(Calculadora &calculadora, Gaveteiro gaveteiro, int16_t endereco); // AC <- cAC + cEE

        void subtraia(Calculadora &calculadora, Gaveteiro gaveteiro, int16_t endereco); // AC <- cAC - cEE

        void multiplique(Calculadora &calculadora, Gaveteiro gaveteiro, int16_t endereco); // AC <- cAC * cEE

        void divida(Calculadora &calculadora, Gaveteiro gaveteiro, int16_t endereco); // AC <- cAC / cEE

        void se(Calculadora calculadora, EPI &epi, int16_t endereco); // se cAC > 0, então EPI <- EE

        void leia(Gaveteiro &gaveteiro, PortaCartoes pc, int16_t endereco); // leia(EE)

        void escreva(Gaveteiro gaveteiro, FolhaDeSaida fs, int16_t endereco); // leia um valor e guarda na gaveta EE

        void para(EPI &epi, int16_t endereco); // EPI <- cEE

        void constante(Calculadora &calculadora, int16_t valor); //AC <- N

        void pare(); // fim do programa

};