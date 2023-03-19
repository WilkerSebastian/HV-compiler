#include <iostream>
#include <fstream>
#include <stdint.h>
#include <vector>
#include <string>
#include <string.h>
#include <locale>

// definição para uso recorrentes do std
using std::cout, std::cerr, std::string, std::vector;

// pré-processamento para uso no entedimento dos argumentos de linha de comando
#define INTERPRETER 0
#define ASSEMBLY 1
#define PARSER 2
#define HELPER 3
#define ERROR -1
#define VERSION "0.9.2"

// declaração das funções  
vector<string> parseVectorString(char * args[], int length);
int8_t decodeArgs(vector<string> args);

int main(int argc, char* argv[]) {

    std::locale::global(std::locale("en_US.UTF-8"));

    vector<string> args = parseVectorString(argv, argc);

    int8_t code = decodeArgs(args);

    switch(code) {

        case ERROR:

            cerr << "Erro nos argumentos de execução, use \'hvc --help\' para ver como usar o HVC \n";
            exit(1);

        break;
        case INTERPRETER:

        break;
        case ASSEMBLY:

        break;
        case PARSER:

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
                 << "hvc --help // para mostrar o guia do hvc\n";

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

int8_t decodeArgs(vector<string> args) {

    int8_t code = ERROR;

    if(args.size() == 2) {

        code = args[1].compare("--help") == 0 ? HELPER : INTERPRETER;

        cout << code;

    }
    else if(args.size() == 3) {

        if (args[1].compare("-o")) {
            
            code = ASSEMBLY;

        } 
        else if(args[1].compare("-p")) {

            code = PARSER;

        }

    }

    return code;

}