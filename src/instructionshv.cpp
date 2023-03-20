#include "../include/instructionshv.hpp"
#include<string>
#include<iostream>

bool carregueCAC(std::string token) {

    std::string comando = "carregue";

    return comando.compare(token.substr(0 , comando.length())) == 0 || token[0] == '1';

}

bool armazeneCAC(std::string token) {

    std::string comando = "armazene o";

    return comando.compare(token.substr(0 , comando.length())) == 0 || token[0] == '2';

}

bool leiaCartaoGuarde(std::string token) {

    std::string comando = "leia um cartão e guarde em";

    return comando.compare(token.substr(0 , comando.length())) == 0 || token[0] == '3';

}

bool imprima(std::string token) {

    std::string comando = "imprima o";

    return comando.compare(token.substr(0 , comando.length())) == 0 || token[0] == '4';

}

bool someCEE(std::string token) {

    std::string comando = "some o";

    return comando.compare(token.substr(0 , comando.length())) == 0 || token[0] == '5';

}

bool seCACdiferenteEE(std::string token) {

    std::string comando = "se";

    return comando.compare(token.substr(0 , comando.length())) == 0 || token[0] == '6';

}

bool pare(std::string token) {

    std::string comando = "pare";

    return comando.compare(token.substr(0 , comando.length())) == 0 || token[0] == '7';

}
