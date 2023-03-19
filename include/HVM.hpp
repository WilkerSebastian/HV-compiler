#ifndef HVM_HPP
#define HVM_HPP

#include "./Calculadora.hpp"
#include "./Gaveteiro.hpp"
#include "./Chico.hpp"
#include "./EPI.hpp"
#include "./PortaCartoes.hpp"
#include <stdint.h>
#include <string>

class HVM {

    private:

        Calculadora calculadora;
        Chico chico;
        EPI epi;
        Gaveteiro gaveteiro;
        PortaCartoes portaCartoes;
        int8_t mode; 

    public:

        void boot(int8_t mode, std::string path);

        std::string lerArquivo(std::string path, std::string extensao);

        void escreverArquivo(std::string path, std::string conteudo);

        void assembly(std::string script);

        void interpreter(std::string script);

        void parser(std::string script);

        std::string assembler(std::string comando);

};

#endif