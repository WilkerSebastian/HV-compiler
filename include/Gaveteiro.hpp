#pragma once
#include <vector>
#include <string>
#include <cstdint>

#define MAX_ACCESS 100

class Gaveteiro {

private:

    std::vector<int16_t> restritos;
    std::string gavetas[MAX_ACCESS];

public:

    bool debug;

    void carga(std::vector<std::string> registros); // inicializador do gaveteiro

    void registrar(int16_t endereco, std::string valor); // alterar valor de uma gaveta

    std::string ler(int16_t endereco); // ler o valor de uma gaveta

};