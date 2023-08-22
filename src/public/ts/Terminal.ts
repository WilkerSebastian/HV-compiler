import * as $ from "jquery"
import Tester from "./Tester";

export default class Terminal {

    public controle = true

    private index = 0;
    private input = "";

    public async scan(text:string) {

        if (!Tester.testing) {

            this.index++;

            this.input = ""

            $("#outputArea").append(`
                <div class="d-flex">
                    <span class="labelField">${text}</span>
                    <input type="text" class="inputField" id="inputField-${this.index}">
                </div>
            `)

            $("body").on('keydown', (e) => {

                if(e.key == 'Enter' || this.input != "") {
        
                    const value = ($(`#inputField-${this.index}`).val() as string).trim()

                    this.input = value != "" ? value : "\n";
        
                    $(`#inputField-${this.index}`).attr("disabled" , "disabled")

                }

            });

            return await this.getBuffer()

        
        }
        this.input = Tester.inputs[this.index]

        this.index++;

        $("#outputArea").append(`
            <div class="d-flex">
                <span class="labelField">${text}</span>
                <input type="text" class="inputField" id="inputField-${this.index}" disabled>
            </div>
        `)

        Tester.addOutput(text)

        return this.input

    }

    private async getBuffer() {

        while(this.input === "" && this.controle) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }

        return this.input;
    }

    public clear() {

        $("#outputArea").html("")

    }

    public addText(text:string) {

        $("#outputArea").append(`<span class="text-output">${text}\n</span>`)

        if(text != "Programa finalizado com sucesso!") {
         
            Tester.addOutput(text)

        }

    }

    public addError(text:string) {

        $("#outputArea").append(`<span class="text-dangerios">${text}\n</span>`)

        Tester.addOutput(text)

    }

}