"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Chico {
    constructor() {
        this.debug = false;
    }
    carregarGaveteiro(gaveterio, script) {
        return gaveterio.carga(script);
    }
    proximaInstrucao(gaveteiro, epi) {
        const registroAtual = epi.lerRegistro();
        epi.registrar(registroAtual + 1);
        return gaveteiro.ler(registroAtual);
    }
    cpEE(calculadora, gaveteiro, endereco) {
        const valor = parseInt(gaveteiro.ler(endereco));
        return calculadora.acumular(valor);
    }
    cpAC(calculadora, gaveteiro, endereco) {
        const acumulador = calculadora.getAcumulador();
        return gaveteiro.registrar(endereco, acumulador.toString());
    }
    some(calculadora, gaveteiro, endereco) {
        const valor = parseInt(gaveteiro.ler(endereco));
        return calculadora.soma(valor);
    }
    subtraia(calculadora, gaveteiro, endereco) {
        const valor = parseInt(gaveteiro.ler(endereco));
        return calculadora.subrtaia(valor);
    }
    multiplique(calculadora, gaveteiro, endereco) {
        const valor = parseInt(gaveteiro.ler(endereco));
        return calculadora.multiplicar(valor);
    }
    divida(calculadora, gaveteiro, endereco) {
        const valor = parseInt(gaveteiro.ler(endereco));
        return calculadora.divida(valor);
    }
    se(calculadora, epi, endereco) {
        if (this.debug) {
            terminal.addDebug(`se (${calculadora.getAcumulador()} > 0): ${calculadora.getAcumulador() > 0 ? "verdadeiro" : "falso"} \nEPI redirecionado para ${endereco}`);
        }
        if (calculadora.getAcumulador() > 0) {
            return epi.registrar(endereco);
        }
        return "sucesso";
    }
    leia(gaveteiro, pc, endereco) {
        return __awaiter(this, void 0, void 0, function* () {
            const valor = yield pc.lerCartao();
            return gaveteiro.registrar(endereco, valor.toString());
        });
    }
    escreva(gaveteiro, fs, endereco) {
        const output = gaveteiro.ler(endereco);
        return fs.imprimir(output);
    }
    para(epi, endereco) {
        if (this.debug) {
            terminal.addDebug(`EPI redirecionando para ${endereco}`);
        }
        return epi.registrar(endereco);
    }
    constante(calculadora, valor) {
        return calculadora.acumular(valor);
    }
    pare() {
        terminal.addText("Programa finalizado com sucesso");
        return "finalizar";
    }
}
