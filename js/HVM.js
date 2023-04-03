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
class HVM {
    constructor() {
        this.debug = false;
        this.calculadora = new Calculadora();
        this.chico = new Chico();
        this.epi = new EPI();
        this.folhaDeSaida = new FolhaDeSaida();
        this.gaveteiro = new Gaveteiro();
        this.portaCartoes = new PortaCartoes();
    }
    run(debug) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setDebug(debug !== null && debug !== void 0 ? debug : false);
            const script = editor.getScript();
            yield this.assembly(script);
        });
    }
    assembly(script) {
        return __awaiter(this, void 0, void 0, function* () {
            script = this.lexer(script);
            for (let index = 0; index < script.length; index++) {
                if (!this.validSyntax(script[index])) {
                    terminal.addError(`Erro de syntax na linha ${index + 1} ${script[index]}`);
                    return;
                }
            }
            let retorno = this.chico.carregarGaveteiro(this.gaveteiro, script);
            for (let index = 0; index < 100; index++) {
                const instrucao = this.chico.proximaInstrucao(this.gaveteiro, this.epi);
                let EE = parseInt(instrucao.substring(1, 2));
                if (RegExp("/^0[0-9][1-9]$/").test(instrucao)) {
                    retorno = this.chico.cpEE(this.calculadora, this.gaveteiro, EE);
                }
                else if (RegExp("/^1[0-9][1-9]$/").test(instrucao)) {
                    retorno = this.chico.cpAC(this.calculadora, this.gaveteiro, EE);
                }
                else if (RegExp("/^2[0-9][1-9]$/").test(instrucao)) {
                    retorno = this.chico.some(this.calculadora, this.gaveteiro, EE);
                }
                else if (RegExp("/^3[0-9][1-9]$/").test(instrucao)) {
                    retorno = this.chico.subtraia(this.calculadora, this.gaveteiro, EE);
                }
                else if (RegExp("/^4[0-9][1-9]$/").test(instrucao)) {
                    retorno = this.chico.multiplique(this.calculadora, this.gaveteiro, EE);
                }
                else if (RegExp("/^5[0-9][1-9]$/").test(instrucao)) {
                    retorno = this.chico.divida(this.calculadora, this.gaveteiro, EE);
                }
                else if (RegExp("/^6[0-9][1-9]$/").test(instrucao)) {
                    retorno = this.chico.se(this.calculadora, this.epi, EE);
                }
                else if (RegExp("/^7[0-9][1-9]$/").test(instrucao)) {
                    retorno = yield this.chico.leia(this.gaveteiro, this.portaCartoes, EE);
                }
                else if (RegExp("/^8[0-9][1-9]$/").test(instrucao)) {
                    retorno = this.chico.escreva(this.gaveteiro, this.folhaDeSaida, EE);
                }
                else if (RegExp("/^9[0-9][1-9]$/").test(instrucao)) {
                    retorno = this.chico.para(this.epi, EE);
                }
                else if (RegExp("/^0-([0-9]{1,3})$/").test(instrucao)) {
                    const regex = RegExp("/\d{1,3}$/");
                    EE = parseInt(instrucao.match(regex)[0]);
                    retorno = this.chico.constante(this.calculadora, EE);
                }
                else if (RegExp("/^([0-9]{3})$/").test(instrucao)) {
                    retorno = this.chico.pare();
                }
                else {
                    terminal.addError(`erro de sintaxe! comando ${instrucao}`);
                    return;
                }
                if (retorno == "erro" || retorno == "finalizar") {
                    return;
                }
            }
        });
    }
    save() {
        const blob = new Blob([editor.getScript().join("\n")], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = "script.ahv";
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    validSyntax(line) {
        let valid = false;
        const rules = [/^[0-9][0-9][0-9]$/, /^0-([0-9]{1,3})$/];
        for (let index = 0; index < rules.length; index++) {
            if (rules[index].test(line)) {
                valid = true;
                break;
            }
        }
        return valid;
    }
    lexer(script) {
        return script.map(e => e.trim());
    }
    setDebug(debug) {
        this.debug = debug;
        this.calculadora.debug = debug;
        this.chico.debug = debug;
        this.epi.debug = debug;
        this.folhaDeSaida.debug = debug;
        this.gaveteiro.debug = debug;
        this.portaCartoes.debug = debug;
    }
}
