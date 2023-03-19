#include "../include/instructionshv.hpp"
#include<string>
#include<iostream>

bool carregueCAC(std::string token) {

    std::string comando = "carregue";

    return comando.compare(token.substr(0 , comando.length())) == 0;

}

bool leiaCartaoGuarde(std::string token) {

    std::string comando = "leia um cartão e guarde em";

    return comando.compare(token.substr(0 , comando.length())) == 0;

}

bool armazeneCAC(std::string token) {

    std::string comando = "armazene o";

    return comando.compare(token.substr(0 , comando.length())) == 0;

}

bool imprima(std::string token) {

    std::string comando = "imprima o";

    return comando.compare(token.substr(0 , comando.length())) == 0;

}

bool someCEE(std::string token) {

    std::string comando = "some o";

    return comando.compare(token.substr(0 , comando.length())) == 0;

}

bool seCACdiferenteEE(std::string token) {

    std::string comando = "se";

    return comando.compare(token.substr(0 , comando.length())) == 0;

}

bool pare(std::string token) {

    std::string comando = "pare";

    return comando.compare(token.substr(0 , comando.length())) == 0;

}
