#include <iostream>
#include <fstream>
#include <string>
#include <string.h>
#include <locale>

#define ASSEMBLY 0
#define INTERPRRETER 1
#define PARSER 2

int main(int argc, char* argv[])
{

    std::locale::global(std::locale("en_US.UTF-8"));

    if (argc < 3)
    {
        std::cerr << "Uso: " << argv[0] << "-(a, o, x) <caminho_do_arquivo>" << std::endl;
        return 1;
    }

    if (strcmp(argv[2], "-o")) {

        

    }
    else if(strcmp(argv[2], "-a")) {

        
    }
    else if(strcmp(argv[2], "-a")) {

        
    } else {

        std::cerr << "Uso: " << argv[0] << "-(a ou -o) <caminho_do_arquivo>" << std::endl;
        return 1;

    }

    // Abre o arquivo para leitura
    std::ifstream file(argv[1]);

    // Verifica se o arquivo foi aberto com sucesso
    if (!file.is_open())
    {
        std::cerr << "Não foi possível abrir o arquivo: " << argv[1] << std::endl;
        return 1;
    }

    // Lê o conteúdo do arquivo e imprime na tela
    std::string line;
    while (std::getline(file, line))
    {
        std::cout << line << std::endl;
    }

    // Fecha o arquivo
    file.close();

    return 0;
}