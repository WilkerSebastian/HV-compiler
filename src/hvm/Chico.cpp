#include "hvm/Chico.hpp"
#include <stdexcept>

void Chico::carga(Gaveteiro& gaveteiro, PortaCartoes& portaCartao) {
    gaveteiro.carga(portaCartao);
}

std::string Chico::proximaInstrucao(Gaveteiro& gaveteiro, EPI& epi) {
    int registroAtual = epi.lerRegistro();
    epi.registrar(registroAtual + 1);
    return gaveteiro.ler(registroAtual);
}

void Chico::cpEE(Calculadora& calculadora, Gaveteiro& gaveteiro, int endereco) {
    int valor = std::stoi(gaveteiro.ler(endereco));
    calculadora.acumular(valor);
}

void Chico::cpAC(Calculadora& calculadora, Gaveteiro& gaveteiro, int endereco) {
    int acumulador = calculadora.getAcumulador();
    gaveteiro.registrar(endereco, std::to_string(acumulador));
}

void Chico::some(Calculadora& calculadora, Gaveteiro& gaveteiro, int endereco) {
    int valor = std::stoi(gaveteiro.ler(endereco));
    calculadora.soma(valor);
}

void Chico::subtraia(Calculadora& calculadora, Gaveteiro& gaveteiro, int endereco) {
    int valor = std::stoi(gaveteiro.ler(endereco));
    calculadora.subtraia(valor);
}

void Chico::multiplique(Calculadora& calculadora, Gaveteiro& gaveteiro, int endereco) {
    int valor = std::stoi(gaveteiro.ler(endereco));
    calculadora.multiplicar(valor);
}

void Chico::divida(Calculadora& calculadora, Gaveteiro& gaveteiro, int endereco) {
    int valor = std::stoi(gaveteiro.ler(endereco));
    calculadora.divida(valor);
}

void Chico::se(Calculadora& calculadora, EPI& epi, int endereco) {
    if (calculadora.getAcumulador() > 0) {
        epi.registrar(endereco);
    }
}

void Chico::leia(Gaveteiro& gaveteiro, PortaCartoes& pc, int endereco) {
    std::string valor = pc.lerCartao();

    if (valor.empty()) 
        valor = pc.lerCartao();

    gaveteiro.registrar(endereco, valor);
}

void Chico::escreva(Gaveteiro& gaveteiro, FolhaDeSaida& fs, int endereco) {
    std::string output = gaveteiro.ler(endereco);
    fs.imprimir(output);
}

void Chico::para(EPI& epi, int endereco) {
    epi.registrar(endereco);
}

void Chico::constante(Calculadora& calculadora, int valor) {
    calculadora.acumular(valor);
}

HVMState Chico::pare() {
    return ENDED;
}
