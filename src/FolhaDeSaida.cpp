#include <string>
#include "../include/FolhaDeSaida.hpp"

void FolhaDeSaida::anotar(Chico chico) {

    std::string nova_linha = "| ";

    nova_linha.append(std::to_string(this->num_linha) + " |");

    nova_linha.append(chico.portaCartoes.historico + " | ");

    nova_linha.append(std::to_string(chico.calculadora.getAcumulador()) + " |");

    nova_linha.append(chico.gaveteiro.historico + " | ");

    nova_linha.append(std::to_string(chico.epi.getindexer()) + " |\n");

    this->num_linha++;

}

std::string FolhaDeSaida::getLog() {

    return this->log;

}