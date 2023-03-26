#include "../include/instructionshv.hpp"
#include<string>
#include<iostream>
#include<regex>

bool copieValorGavetaEE(std::string token) {

    std::regex regex_pattern("^0[0-9][1-9]$");

    return std::regex_match(token, regex_pattern);

}
bool copieValorAC(std::string token) {

    std::regex regex_pattern("^1[0-9][0-9]$");

    return std::regex_match(token, regex_pattern);

}

bool someEEaoAC(std::string token) {

    std::regex regex_pattern("^2[0-9][0-9]$");

    return std::regex_match(token, regex_pattern);

}

bool subtraiaACoEE(std::string token) {

    std::regex regex_pattern("^3[0-9][0-9]$");

    return std::regex_match(token, regex_pattern);

}

bool multipliqueACporEE(std::string token) {

    std::regex regex_pattern("^4[0-9][0-9]$");

    return std::regex_match(token, regex_pattern);

}

bool dividaACporEE(std::string token) {

    std::regex regex_pattern("^5[0-9][0-9]$");

    return std::regex_match(token, regex_pattern);

}

bool seACmaiorVaParaEE(std::string token) {

    std::regex regex_pattern("^6[0-9][0-9]$");

    return std::regex_match(token, regex_pattern);

}

bool leiaValorGuardaGavetaEE(std::string token) {

    std::regex regex_pattern("^7[0-9][0-9]$");

    std::string out = std::regex_match(token, regex_pattern) ? "real" : "fake";

    return std::regex_match(token, regex_pattern);

}

bool escrevaEEnaSaida(std::string token) {

    std::regex regex_pattern("^8[0-9][0-9]$");

    return std::regex_match(token, regex_pattern);

}

bool vaParaEE(std::string token) {

    std::regex regex_pattern("^9[0-9][0-9]$");

    return std::regex_match(token, regex_pattern);

}

bool ACrecebeConstante(std::string token) {

    std::regex regex_pattern("^0-([0-9]{1,3})$");

    return std::regex_match(token, regex_pattern);

}

bool fimDoPrograma(std::string token) {

    std::regex regex_pattern("^([0-9]{3})$");

    return std::regex_match(token, regex_pattern);

}

bool isCommand(std::string token) {

    bool valid = true;

    std::regex r1("^[0-9][0-9][0-9]$");
    std::regex r2("^0-([0-9]{1,3})$");

    if (!std::regex_match(token , r1)){

        valid = false;
        
    }
    if (!std::regex_match(token , r2)){

        valid = false;
        
    }

    return valid;

}