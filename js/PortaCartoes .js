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
class PortaCartoes {
    constructor() {
        this.debug = false;
    }
    lerCartao() {
        return __awaiter(this, void 0, void 0, function* () {
            const input = yield terminal.scan("Informe o valor de 3 algarimos do cartão: ");
            if (this.debug) {
                terminal.addText(`ENTRADA DE CARTÂO valor recebido: ${input}`);
            }
            const valor = parseInt(input);
            if (valor < 0 || valor > 999) {
                terminal.addError(`Erro na escrita do gaveteiro, do valor ${valor},unico valor aceito é entre 0-999 `);
                return "erro";
            }
            return valor;
        });
    }
}
