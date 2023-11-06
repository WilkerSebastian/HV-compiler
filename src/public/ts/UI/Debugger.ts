import * as $ from "jquery"

export default class Debugger {

    private acumulador = $("#acumulador").children(".medidor-debug");
    private epi = $("#epi").children(".medidor-debug");
    public timeout = 200
    public debug = false

    public viewState(state?:string, color?:string) {

        if (state && this.debug) {

            $("#state").css("display", "flex")
            $("#state").css("background-color", color)

            $("#state").html(state)

            $("#state").append(`
                <div class="spinner-grow m-auto mx-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            `)
            
            return

        }

        $("#state").css("display", "none")

    }

    public atualizarEPI(instrucao:string) {

        if (this.debug) this.epi.text(instrucao)

        $(".bg-content").addClass("inst-debug")
        $(".bg-content").removeClass("bg-content")

        $(`#${parseInt(instrucao)}`).children("td").addClass("bg-content").removeClass("inst-debug")

    }

    public atualizarAcumulador(valor:string) {

        if (this.debug) { 
            
            this.acumulador.text(valor)
        
        }

    }

    public atualizarPortaCartoes(buffer:string[]) {

        if (this.debug) {
        
            const pc = $("#portaCartoes").children("tbody")

            pc.html(" ")

            buffer.forEach(conteudo => {

                pc.append(`
                    <tr>
                        <td>${conteudo}</td>
                    </tr>
                `)

            })  
        }   

    }

    public atualizarGaveteiro(gaveteiro:string[], ultimoRestrito:number) {

        if (this.debug) {
            
            const gavetas = $("#gavetas").children("tbody")

            gavetas.html(" ")

            for (let i = 0; i < gaveteiro.length; i++) {

                if (gaveteiro[i]) {
                 
                    gavetas.append(`
                        <tr id="${i}">
                            <td>${i}</td>
                            <td class="${i > ultimoRestrito ? "data-debug" : "inst-debug"}">${gaveteiro[i]}</td>
                        </tr>
                    `)

                }
            
            }

        }

    }

    public clear() {

        this.atualizarEPI("null")
        this.atualizarAcumulador("null")
        $("#portaCartoes").children("tbody").html(" ")
        $("#gavetas").children("tbody").html(" ")

    }

}