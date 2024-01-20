#pragma once

#include "hvm/Calculadora.hpp"
#include "hvm/Chico.hpp"
#include "hvm/EPI.hpp"
#include "hvm/FolhaDeSaida.hpp"
#include "hvm/Gaveteiro.hpp"
#include "hvm/PortaCartoes.hpp"
#include "Enums/HVMState.hpp"
#include "syntax/language/DrawerLanguage.hpp"
#include <string>

class HVM {

    private:
        HVMState state;
        Calculadora calculadora;
        Chico chico;
        EPI epi;
        FolhaDeSaida folhaDeSaida;
        Gaveteiro gaveteiro;
        PortaCartoes portaCartoes;

    public:
        HVM();

        void run(const std::string& code);

        void executable();

        void setState(HVMState state);
};
