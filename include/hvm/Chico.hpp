#pragma once

#include "hvm/Gaveteiro.hpp"
#include "hvm/EPI.hpp"
#include "hvm/Calculadora.hpp"
#include "hvm/FolhaDeSaida.hpp"
#include "hvm/PortaCartoes.hpp"
#include "Enums/HVMState.hpp"

class Chico {

    public:
        void carga(Gaveteiro& gaveteiro, PortaCartoes& portaCartao);

        std::string proximaInstrucao(Gaveteiro& gaveteiro, EPI& epi);

        void cpEE(Calculadora& calculadora, Gaveteiro& gaveteiro, int endereco);

        void cpAC(Calculadora& calculadora, Gaveteiro& gaveteiro, int endereco);

        void some(Calculadora& calculadora, Gaveteiro& gaveteiro, int endereco);

        void subtraia(Calculadora& calculadora, Gaveteiro& gaveteiro, int endereco);

        void multiplique(Calculadora& calculadora, Gaveteiro& gaveteiro, int endereco);

        void divida(Calculadora& calculadora, Gaveteiro& gaveteiro, int endereco);

        void se(Calculadora& calculadora, EPI& epi, int endereco);

        void leia(Gaveteiro& gaveteiro, PortaCartoes& pc, int endereco);

        void escreva(Gaveteiro& gaveteiro, FolhaDeSaida& fs, int endereco);

        void para(EPI& epi, int endereco);

        void constante(Calculadora& calculadora, int valor);

        HVMState pare();
};
