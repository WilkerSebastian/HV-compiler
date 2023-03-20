#ifndef HVM_HPP
#define HVM_HPP

#include "./Chico.hpp"
#include <stdint.h>
#include <string>

class HVM {

    public:

        Chico chico;

        void boot(int mode, std::string path);

        std::string lerArquivo(std::string path, std::string extensao);

        void escreverArquivo(std::string path, std::string conteudo);

        void assembly(std::string script);

        void interpreter(std::string script);

        void parser(std::string script);

        std::string assembler(std::string comando);

};

#endif