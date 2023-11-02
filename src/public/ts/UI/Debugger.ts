import * as $ from "jquery"

export default class Debugger {

    private acumulador = $("#acumulador").children(".medidor-debug");
    private epi = $("#epi").children(".medidor-debug");
    private gaveteiro = $("#gavetas").children("tbody");
    private gavetas = new Array<Gaveta>(100)
    public timeout = 200
    public debug = false

    public atualizarEPI(intrucao:string) {

        if (this.debug) this.epi.text(intrucao)

    }

    public autalizarAcumulador(intrucao:string) {

        if (this.debug) this.acumulador.text(intrucao)

    }

    public intrepetando(epi:number) {

        if(this.debug) {

            $(".bg-content").removeClass("bg-content")

            $(`#${epi}`).children("td").addClass("bg-content")

        }

    }

    private validationTable(table:Gaveta) {

        table.instrucao = table.instrucao ?? " "
        table.valor = table.valor ?? " "
        table.pc = table.pc ?? " "
        table.fs = table.fs ?? " "
        table.epi = table.epi ?? " "

    }

    public adicionarGaveteiro(table:Gaveta) {

        if (this.debug) {

            this.validationTable(table)

            if(this.gavetas.filter(g => g.gaveta == table.gaveta).length == 0) {

                this.gaveteiro.append(`
                <tr id="${table.gaveta}">
                    <td>${table.gaveta}</td>
                    <td>${table.instrucao}</td>
                    <td>${table.valor}</td>
                    <td>${table.pc}</td>
                    <td>${table.fs}</td>
                    <td>${table.epi}</td>
                </tr>`)

                this.gavetas[parseInt(table.gaveta)] = table

            } else {

                const i = parseInt(table.gaveta);

                this.gaveteiro.children(`#${table.gaveta}`).html(`
                    <td>${this.gavetas[i].gaveta != table.gaveta ? table.gaveta : this.gavetas[i].gaveta}</td>
                    <td>${this.gavetas[i].instrucao != table.instrucao ? table.instrucao : this.gavetas[i].instrucao}</td>
                    <td>${this.gavetas[i].valor != table.valor ? table.valor : this.gavetas[i].valor}</td>
                    <td>${this.gavetas[i].pc != table.pc ? table.pc : this.gavetas[i].pc}</td>
                    <td>${this.gavetas[i].fs != table.fs ? table.fs : this.gavetas[i].fs}</td>
                    <td>${this.gavetas[i].epi != table.epi ? table.epi : this.gavetas[i].epi}</td>
                `)

            }

            this.gavetas[parseInt(table.gaveta)] = table

        }

    }

    public clear() {

        this.gavetas = new Array<Gaveta>(100)
        this.atualizarEPI("null")
        this.autalizarAcumulador("null")
        this.gaveteiro.html("")

    }

}

export interface Gaveta {
    gaveta?:string, 
    instrucao?:string, 
    valor?:string, 
    pc?:string, 
    fs?:string, 
    epi?:string
}