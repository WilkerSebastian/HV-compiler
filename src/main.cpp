#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <string.h>
#include <locale>

#define ASSEMBLY 0
#define INTERPRRETER 1
#define PARSER 2

using std::cout, std::cerr, std::string;

std::vector<string> parseVectorString(char * args[], int length);

int main(int argc, char* argv[]) {

    std::locale::global(std::locale("en_US.UTF-8"));

    return 0;
}

std::vector<string> parseVectorString(char * args[], int length) {

    std::vector<string> resultados;

    for (int i = 0; i < length; i++) {

        string resultado(args[i]);
        resultados.push_back(resultado);

    }

    return resultados;

}