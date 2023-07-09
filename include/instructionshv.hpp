#pragma once
#include<string>

/* TODO: cirar a classe syntax
    A classe syntax deve ser reponsalvel por realizar o processo
    de extraçao de termos e regex além de unificar todas essa funções
    num unico método de int sysntaxAHV(std::string token). 
*/

bool copieValorGavetaEE(std::string token);
bool copieValorAC(std::string token);
bool someEEaoAC(std::string token);
bool subtraiaACoEE(std::string token);
bool multipliqueACporEE(std::string token);
bool dividaACporEE(std::string token);
bool seACmaiorVaParaEE(std::string token);
bool leiaValorGuardaGavetaEE(std::string token);
bool escrevaEEnaSaida(std::string token);
bool vaParaEE(std::string token);
bool ACrecebeConstante(std::string token);
bool fimDoPrograma(std::string token);
bool isCommand(std::string token);