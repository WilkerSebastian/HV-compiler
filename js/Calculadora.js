"use strict";
class Calculadora {
    constructor() {
        this.acumulador = 0;
        this.debug = false;
    }
    soma(valor) {
        if (this.debug) {
            terminal.addText(`CALCULADORA DEBUG\nACUMULADOR ATUAL: ${this.acumulador}\nOPERAÇÂO: ${this.acumulador} + ${valor} = ${this.acumulador + valor}`);
        }
        if (valor < 0 || valor + this.acumulador > 999) {
            terminal.addError(`Erro na operação ${this.acumulador} + ${valor} = ${valor + this.acumulador}, único valor aceito como resultado é entre 0-999`);
            return "erro";
        }
        this.acumulador += valor;
        return "sucesso";
    }
    subrtaia(valor) {
        if (this.debug) {
            terminal.addText(`CALCULADORA DEBUG\nACUMULADOR ATUAL: ${this.acumulador}\nOPERAÇÂO: ${this.acumulador} - ${valor} = ${this.acumulador - valor}`);
        }
        if (valor < 0 || valor + this.acumulador > 999) {
            terminal.addError(`Erro na operação ${this.acumulador} - ${valor} = ${valor - this.acumulador}, único valor aceito como resultado é entre 0-999`);
            return "erro";
        }
        this.acumulador -= valor;
        return "sucesso";
    }
    multiplicar(valor) {
        if (this.debug) {
            terminal.addText(`CALCULADORA DEBUG\nACUMULADOR ATUAL: ${this.acumulador}\nOPERAÇÂO: ${this.acumulador} * ${valor} = ${this.acumulador * valor}`);
        }
        if (valor < 0 || valor + this.acumulador > 999) {
            terminal.addError(`Erro na operação ${this.acumulador} * ${valor} = ${valor * this.acumulador}, único valor aceito como resultado é entre 0-999`);
            return "erro";
        }
        this.acumulador *= valor;
        return "sucesso";
    }
    divida(valor) {
        if (this.debug) {
            terminal.addText(`CALCULADORA DEBUG\nACUMULADOR ATUAL: ${this.acumulador}\nOPERAÇÂO: ${this.acumulador} / ${valor} = ${this.acumulador / valor}`);
        }
        if (valor < 0 || valor + this.acumulador > 999) {
            terminal.addError(`Erro na operação ${this.acumulador} / ${valor} = ${valor / this.acumulador}, único valor aceito como resultado é entre 0-999`);
            return "erro";
        }
        this.acumulador /= valor;
        return "sucesso";
    }
    acumular(valor) {
        if (this.debug) {
            terminal.addText(`CALCULADORA DEBUG\nACUMULADOR ATUAL: ${this.getAcumulador()}\nOPERAÇÂO: ${valor}`);
        }
        if (valor < 0 || valor > 999) {
            terminal.addError(`Erro na escrita do acumulador, do valor ${valor}, unico valor aceito é entre 0-999`);
            return "erro";
        }
        this.acumulador = valor;
        return "sucesso";
    }
    getAcumulador() {
        return this.acumulador;
    }
}
