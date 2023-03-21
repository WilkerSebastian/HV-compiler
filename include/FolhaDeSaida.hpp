#ifndef FOLHADESAIDA_HPP
#define FOLHADESAIDA_HPP
#include "./Chico.hpp"
#include <string>

class FolhaDeSaida {

    private:

        int num_linha = 0;
        std::string log = "| g | pc                 | cAC | CXX | cEPI |\n";

    public:

        void anotar(Chico chico);
        std::string getLog();

};

#endif