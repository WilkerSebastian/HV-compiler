#include <iostream>
#include <string>
#include <stdexcept>
#include <regex>
#include <filesystem>
#include <locale>
#include "Enums/CLI.hpp"

const std::string VER = "1.5.3";

CLI commandLine(int len, char const * argv[]);
void version();
void help();

int main(int argc, char const * argv[]) {

    std::locale::global(std::locale("pt_BR.UTF-8"));

    CLI cli;

    try {

        cli = commandLine(argc, argv); 

    } catch(const std::exception& e) {
        std::cerr << e.what() << '\n';
        return EXIT_FAILURE;
    }

    switch (cli) {
        case VERSION:

            version();
            break;
        
        case HELP:

            help();
            break;

        case EXECUTABLE:

            break;
    }

    return EXIT_SUCCESS;
}

CLI commandLine(int len, char const * argv[]) {

    if (len != 2)
        throw std::runtime_error("comando não encontrado!");

    std::string argument(argv[1]);

    if (std::regex_match(argument, std::regex("^(-v|--version)$")))
        return VERSION;

    if (std::regex_match(argument, std::regex("^(-h|--help)$"))) 
        return HELP;
    
    if (std::filesystem::exists(argument))
        return EXECUTABLE;
    
    throw std::runtime_error("comando não encontrado!");

}

void version() {

    std::cout << VER << '\n';

}

void help() {

    std::cout << "\nHVC v" << VER << "\n\n"
    << "HVC é um compilador para as linguagens que compilam para os computadores HV\n\n"
    << "Comandos:\n\n"
    << "  hvc <arquivo>                  Executa um arquivo decimario executavel com HVC\n\n"
    << "Flags: \n\n"
    << "  -v, --version                  Imprime a versão\n"
    << "  -h, --help                     Mostra os comandos do hvc\n";

}
