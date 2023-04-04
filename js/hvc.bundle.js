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
            terminal.addText(`CALCULADORA DEBUG<br>ACUMULADOR ATUAL: ${this.getAcumulador()}<br>OPERAÇÂO: ${this.getAcumulador()} = ${valor}`);
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
class EPI {
    constructor() {
        this.valor = 0;
        this.debug = false;
    }
    registrar(registro) {
        if (registro > 99) {
            terminal.addError("Erro de sobrecarga da pilha, limite de 100 registros");
            return "erro";
        }
        this.valor = registro;
        return "sucesso";
    }
    lerRegistro() {
        return this.valor;
    }
}
class Editor {
    getScript() {
        let values;
        values = $(".mtk1").get().map((e) => {
            return (e.firstChild.data).trim();
        });
        return values;
    }
}
class FolhaDeSaida {
    constructor() {
        this.debug = false;
    }
    imprimir(texto) {
        terminal.addText(`\nfolha de saida: ${texto}\n`);
        return "sucesso";
    }
}
class Gaveteiro {
    constructor() {
        this.restritos = [];
        this.gavetas = new Array(100);
        this.debug = false;
    }
    carga(registros) {
        if (this.debug) {
            terminal.addDebug("INICIANDO PROCESSO DE CARGA<br>---------------------------");
        }
        for (let i = 0; i < registros.length; i++) {
            if (this.debug) {
                terminal.addDebug(`${i}: ${registros[i]}\n`);
            }
            this.gavetas[i] = registros[i];
            this.restritos.push(i);
        }
        if (this.debug) {
            terminal.addDebug("-----------------------------<br>FINALIZANDO PROCESSO DE CARGA");
        }
        return "sucesso";
    }
    registrar(endereco, valor) {
        if (this.debug) {
            terminal.addDebug(`GAVETEIRO DEBUG\ngravando na gaveta (${endereco}) com valor ${valor}\n`);
        }
        for (let i = 0; i < this.restritos.length; i++) {
            if (this.restritos[i] === endereco) {
                const conteudo = this.ler(endereco);
                terminal.addError(`\nErro tentativa de sobrescrita de gaveta que armazena código fonte\nconteudo da gaveta(): ${conteudo}\n`);
                return "erro";
            }
        }
        this.gavetas[endereco] = valor;
        return "sucesso";
    }
    ler(endereco) {
        if (endereco < 0 || endereco > 99) {
            console.error(`Erro na leitura do gaveteiro no endereço ${endereco}, tentativa de registro em endereço inexistente\n`);
            return "erro";
        }
        return this.gavetas[endereco];
    }
}
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
            terminal.clear();
            this.setDebug(debug !== null && debug !== void 0 ? debug : false);
            const script = editor.getScript();
            yield this.assembly(script);
            return 0;
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
            if (this.debug) {
                terminal.addDebug("-------------------------------\nDEBUG ASSEMBLY\n-------------------------------\n");
            }
            let retorno = this.chico.carregarGaveteiro(this.gaveteiro, script);
            for (let index = 0; index < 100; index++) {
                if (this.debug) {
                    terminal.addDebug("-------------------------------\n");
                }
                const instrucao = this.chico.proximaInstrucao(this.gaveteiro, this.epi);
                console.log(instrucao);
                let EE = parseInt(instrucao.substring(1, 2));
                if (RegExp("^0[0-9]{2}$").test(instrucao) && instrucao != "000") {
                    retorno = this.chico.cpEE(this.calculadora, this.gaveteiro, EE);
                }
                else if (RegExp("^1[0-9]{2}$").test(instrucao)) {
                    retorno = this.chico.cpAC(this.calculadora, this.gaveteiro, EE);
                }
                else if (RegExp("^2[0-9]{2}$").test(instrucao)) {
                    retorno = this.chico.some(this.calculadora, this.gaveteiro, EE);
                }
                else if (RegExp("^3[0-9]{2}$").test(instrucao)) {
                    retorno = this.chico.subtraia(this.calculadora, this.gaveteiro, EE);
                }
                else if (RegExp("^4[0-9]{2}$").test(instrucao)) {
                    retorno = this.chico.multiplique(this.calculadora, this.gaveteiro, EE);
                }
                else if (RegExp("^5[0-9]{2}$").test(instrucao)) {
                    retorno = this.chico.divida(this.calculadora, this.gaveteiro, EE);
                }
                else if (RegExp("^6[0-9]{2}$").test(instrucao)) {
                    retorno = this.chico.se(this.calculadora, this.epi, EE);
                }
                else if (RegExp("^7[0-9]{2}$").test(instrucao)) {
                    retorno = yield this.chico.leia(this.gaveteiro, this.portaCartoes, EE);
                }
                else if (RegExp("^8[0-9]{2}$").test(instrucao)) {
                    retorno = this.chico.escreva(this.gaveteiro, this.folhaDeSaida, EE);
                }
                else if (RegExp("^9[0-9]{2}$").test(instrucao)) {
                    retorno = this.chico.para(this.epi, EE);
                }
                else if (RegExp("^0-\\d{1,3}$").test(instrucao)) {
                    const regex = RegExp("\\d{1,3}$");
                    EE = parseInt(instrucao.match(regex)[0]);
                    retorno = this.chico.constante(this.calculadora, EE);
                }
                else if (RegExp("000").test(instrucao)) {
                    retorno = this.chico.pare();
                }
                else {
                    terminal.addError(`erro de sintaxe! comando ${instrucao}`);
                    return;
                }
                if (this.debug && !(retorno == "erro" || retorno == "finalizar")) {
                    terminal.addDebug(`-------------------------------<br>DEBUG LOG<br>INSTRUÇÂO: ${instrucao}<br>EE: ${EE}`);
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
        const rules = [/^[0-9]{3}$/, /^0-\d{1,3}$/];
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
class Terminal {
    constructor() {
        this.index = 0;
        this.input = "";
    }
    scan(text) {
        return __awaiter(this, void 0, void 0, function* () {
            this.index++;
            this.input = "";
            $("#outputArea").append(`
            <div class="d-flex">
                <span class="labelField">${text}</span>
                <input type="text" class="inputField" id="inputField-${this.index}">
            </div>
        `);
            $("body").on('keydown', (e) => {
                if (e.key == 'Enter' || this.input != "") {
                    const value = $(`#inputField-${this.index}`).val().trim();
                    this.input = value != "" ? value : "\n";
                    $(`#inputField-${this.index}`).attr("disabled", "disabled");
                }
            });
            return yield this.getBuffer();
        });
    }
    getBuffer() {
        return __awaiter(this, void 0, void 0, function* () {
            while (this.input === "") {
                yield new Promise(resolve => setTimeout(resolve, 10));
            }
            return this.input;
        });
    }
    clear() {
        $("#outputArea").html("");
    }
    addText(text) {
        $("#outputArea").append(`<span class="text-output">${text}\n</span>`);
    }
    addError(text) {
        $("#outputArea").append(`<span class="text-dangerios">${text}\n</span>`);
    }
    addDebug(text) {
        $("#outputArea").append(`<span class="text-alert">${text}\n</span>`);
    }
}
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
        terminal.addText("Programa finalizado com sucesso!");
        return "finalizar";
    }
}
const editor = new Editor();
const terminal = new Terminal();
const hvm = new HVM();
$("#run").on("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield hvm.run();
}));
$("#debug").on("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield hvm.run(true);
}));
$("#save").on("click", () => {
    hvm.save();
});
for (let index = 1; index <= 100; index++) {
    $(`.win-w${index}`).css("width", `${(index / 100) * window.innerWidth}px`);
    $(`.win-h${index}`).css("height", `${(index / 100) * window.innerHeight}px`);
}
