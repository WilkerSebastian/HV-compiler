"use strict";
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
