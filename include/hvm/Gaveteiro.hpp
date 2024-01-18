#pragma once

#include <string>
#include <vector>
#include "hvm/PortaCartoes.hpp"

class Gaveteiro {
    private:
        int ultimoRestrito;
        std::vector<std::string> gavetas;

    public:
        Gaveteiro(int maxGavetas = 100);

        std::vector<std::string> getGavetas();

        void carga(PortaCartoes& portaCartao);

        void registrar(int endereco, const std::string& valor);

        std::string ler(int endereco);
};