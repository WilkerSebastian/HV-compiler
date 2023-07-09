#pragma once
#include "PortaCartoes.hpp"
#include "FolhaDeSaida.hpp"
#include "Chico.hpp"
#include "EPI.hpp"
#include "Calculadora.hpp"
#include "Gaveteiro.hpp"
#include <string>
#include <cstdint>

#define INTERPRETER 0 // compilação de hv script
#define ASSEMBLY 1 // intepretação de hv assembly
#define PARSER 2 // para fazer o parser

class HVM { // HVM(Hipotetic Virtual Machine)

    private:

        EPI epi;
        Calculadora calculadora;
        Gaveteiro gaveteiro;
        Chico chico;
        PortaCartoes portaCartoes;
        FolhaDeSaida folhaDeSaida;
        bool debug;

    public:

        void boot(int mode, std::string path); // inicializador do compilador que recebe operação e caminho para script executada

        std::string lerArquivo(std::string path, std::string extensao); // método para leitura de arquivo

        void escreverArquivo(std::string path, std::string conteudo); // método para escrita de arquivo

        void assembly(std::string script); // método intepretação de hv assembly

        void setDebug(bool debug); // método para definir se estará em debug o hvm

};