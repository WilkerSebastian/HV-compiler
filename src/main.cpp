#include <iostream>
#include <fstream>
#include <stdint.h>
#include <vector>
#include <string>
#include <string.h>
#include <locale>
#include "../include/HVM.hpp"

// definição para uso recorrentes do std
using std::cout, std::cerr, std::string, std::vector;

// pré-processamento para uso no entedimento dos argumentos de linha de comando
#define INTERPRETER 0
#define ASSEMBLY 1
#define PARSER 2
#define HELPER 3
#define VER 4
#define ERROR -1
#define VERSION "0.9.8"

// declaração das funções  
vector<string> parseVectorString(char * args[], int length);
int decodeArgs(vector<string> args);

int main(int argc, char* argv[]) {

    std::locale::global(std::locale("pt_BR.UTF-8"));

    vector<string> args = parseVectorString(argv, argc);

    int code = decodeArgs(args);

    HVM hvm;

    switch(code) {

        case ERROR:

            cerr << "Erro nos argumentos de execução, use \'hvc --help\' para ver como usar o HVC \n";
            exit(1);

        break;
        case INTERPRETER:

        break;
        case ASSEMBLY:

            hvm.boot(ASSEMBLY, args[2]);

        break;
        case PARSER:

            hvm.boot(PARSER, args[2]);

        break;
        case VER:

            cout << "\nHVC v" << VERSION << "\n";

        break;
        case HELPER:

            cout << "\nHV compiler \n\n"
                 << "versão: " << VERSION << "\n"
                 << "descrição: O HV compiler é um compilador para o\n"
                 << "computador hipoitético HV, para scripts\n"
                 << ".hvs (HV script)\n"
                 << ".ahv (assembly de HV)\n"
                 << "para ver melhor como usar o compilador acesse\n"
                 << "github: https://github.com/WilkerSebastian/HV-compiler\n\n\n"
                 << "Comandos\n\n"
                 << "hvc <caminho_do_arquivo_hvs> // compila em tempo de execução o HV script \n"
                 << "hvc -o <caminho_do_arquivo_ahv> // compila em tempo de execução o assembly HV \n"
                 << "hvc -p <caminho_do_arquivo_hvs> // transpila o código hvs para ahv\n"
                 << "hvc --help // para mostrar o guia do hvc\n"
                 << "hvc --version // para mostrar a versão do hvc\n";

        break;
    
    }

    return 0;
}

vector<string> parseVectorString(char * args[], int length) {

    vector<string> resultados;

    for (int i = 0; i < length; i++) {

        string resultado(args[i]);
        resultados.push_back(resultado);

    }

    return resultados;

}

int decodeArgs(vector<string> args) {

    int code = ERROR;

    if(args.size() == 2) {

        code = args[1].compare("--help") == 0 ? HELPER : args[1].compare("--version") == 0 ? VER : INTERPRETER;

    }
    else if(args.size() == 3) {

        if (args[1].compare("-o") == 0) {
            
            code = ASSEMBLY;

        } 
        else if(args[1].compare("-p") == 0) {

            code = PARSER;

        }

    }

    return code;

}