"use strict";
class FolhaDeSaida {
    constructor() {
        this.debug = false;
    }
    imprimir(texto) {
        terminal.addText(`\nfolha de saida: ${texto}\n`);
        return "sucesso";
    }
}
