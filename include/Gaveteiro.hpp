#ifndef GAVETEIRO_HPP
#define GAVETEIRO_HPP
#include <vector>
#include <cstdint>
#include <string>

#define MAX_ACCESS 100

class Gaveteiro {

private:

    std::string gavetas[MAX_ACCESS];

public:

    void carga(std::vector<std::string> registros);

    void registrar(uint16_t endereco, std::string valor);

    std::string ler(uint16_t endereco);

};

#endif