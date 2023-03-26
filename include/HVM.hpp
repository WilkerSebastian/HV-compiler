#ifndef HVM_HPP
#define HVM_HPP

#include "PortaCartoes.hpp"
#include "FolhaDeSaida.hpp"
#include "Chico.hpp"
#include "EPI.hpp"
#include "Calculadora.hpp"
#include "Gaveteiro.hpp"
#include <cstdint>
#include <string>

class HVM {

    private:

        EPI epi;
        Calculadora calculadora;
        Gaveteiro gaveteiro;
        Chico chico;
        PortaCartoes portaCartoes;
        FolhaDeSaida folhaDeSaida;
        bool debug;

    public:

        void boot(int mode, std::string path);

        std::string lerArquivo(std::string path, std::string extensao);

        void escreverArquivo(std::string path, std::string conteudo);

        void assembly(std::string script);

        void interpreter(std::string script);

        void parser(std::string script);

        std::string assembler(std::string comando);

        void setDebug(bool debug);

};

#endif