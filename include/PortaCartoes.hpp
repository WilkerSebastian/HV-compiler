#pragma once
#include <string>
#include <cstdint>
#include <queue>

class PortaCartoes {

    public:

        bool debug;

        std::queue<int16_t> conteudo;

        int16_t lerCartao();

        void inserirCartao(int16_t valor);

};