#pragma once

#include <string>
#include <queue>

class PortaCartoes {

    private:
        std::queue<std::string> conteudo;

    public:

        void inserir(const std::string cartao);

        std::string lerCartao();

        void solicitarCartao();
};