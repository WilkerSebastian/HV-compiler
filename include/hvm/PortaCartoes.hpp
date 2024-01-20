#pragma once

#include <string>
#include <queue>

class PortaCartoes {

    private:
        std::queue<std::string> conteudo;

    public:

        void inserir(const std::vector<std::string>& cartoes);

        std::string lerCartao();
};