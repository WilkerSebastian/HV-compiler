#include "hvm/HVM.hpp"
#include <regex>

HVM::HVM() {

    this->state = ENDED;

}

void HVM::run(const std::string& code) {

    std::regex regex("\\s+");

    std::sregex_token_iterator iterator(code.begin(), code.end(), regex, -1);
    std::sregex_token_iterator end;

    std::vector<std::string> result(iterator, end);

    portaCartoes.inserir(result);
    state = CHARGE;
    executable();
}

void HVM::executable() {

    DrawerLanguage syntax;

    chico.carga(gaveteiro, portaCartoes);

    this->state = RUNNING;

    do {

        Token token = syntax.lexer(chico.proximaInstrucao(gaveteiro, epi));

        std::string instrucao = token.getType();
        int EE = token.getValue();

        if (instrucao == "0EE") 
            chico.cpEE(calculadora, gaveteiro, EE);

        else if (instrucao == "1EE") 
            chico.cpAC(calculadora, gaveteiro, EE);

        else if (instrucao == "2EE") 
            chico.some(calculadora, gaveteiro, EE);

        else if (instrucao == "3EE") 
            chico.subtraia(calculadora, gaveteiro, EE);

        else if (instrucao == "4EE") 
            chico.multiplique(calculadora, gaveteiro, EE);

        else if (instrucao == "5EE") 
            chico.divida(calculadora, gaveteiro, EE);

        else if (instrucao == "6EE") 
            chico.se(calculadora, epi, EE);

        else if (instrucao == "7EE") 
            chico.leia(gaveteiro, portaCartoes, EE);

        else if (instrucao == "8EE") 
            chico.escreva(gaveteiro, folhaDeSaida, EE);

        else if (instrucao == "9EE") 
            chico.para(epi, EE);

        else if (instrucao == "0-N") 
            chico.constante(calculadora, EE);

        else if (instrucao == "000") 
            state = chico.pare();
        
    } while (state != ENDED);

}

void HVM::setState(HVMState state) {
    this->state = state;
}
