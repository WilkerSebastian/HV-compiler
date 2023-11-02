import * as $ from "jquery"
import HVC from "../HVC"

export default class Tester {

    private static output:string
    public static inputs = new Array<string>()
    public static testing = false

    constructor() {

        $("#modal-t").load("./layouts/test.html")

    }

    private open() {

        $("#btn-test").trigger("click")

    }

    public static addOutput(linha:string) {

        Tester.output += linha

    }

    private async loadFile(nameFile:string) {

       return await(await fetch("../public/test/" + nameFile)).text()

    }

    private async compare(script:string) {

        const sc =  await this.loadFile(script + ".ahv")

        HVC.editor.setScript(sc)
 
        await HVC.hvm.run()

        const out = await this.loadFile(script + ".txt")
        
        return {
            
            result: out.replace(/\r|\n/g, "").trim() == Tester.output.replace(/\r|\n/g, "").trim(),
            expected: out.replace(/\r|\n/g, "").trim(),
            obtained: Tester.output.replace(/\r|\n/g, "").trim()

        }

    }

    private async execute(test:string) {

        const res = await this.compare(test)

        Tester.output = ""

        console.log(res.result, res.expected, res.obtained);

        if (res.result) {
            
            return `<p class="text-light"> Teste ${test} passou! ✅</p>`

        }
        
        return `<p class="text-light"> Teste ${test} falhou! ❌<br> 
        Saida esperada: ${res.expected}<br>
        Saida obtida: ${res.obtained}
        </p>`

    }

    private addInputs(inputs:string[]) {

        Tester.inputs.push(...inputs)

    }

    private clearInputs() {

        Tester.inputs = new Array<string>()

    }

    private clear() {

        this.clearInputs()
        Tester.output = ""
        $("#test").html(" ")

    }

    public async run() {

        Tester.testing = true

        HVC.debugger.debug = false

        this.clear()

        this.open()

        $("#test").append(`<h3 class="text-light text-center"> Testes de I/O </h3>`)

        this.addInputs(["10"])
        $("#test").append(await this.execute("print"))
        $("#test").append(await this.execute("for_input"))

        $("#test").append(`<h3 class="text-light text-center"> Testes de Calculadora </h3>`)

        $("#test").append(await this.execute("sum"))
        $("#test").append(await this.execute("sub"))
        $("#test").append(await this.execute("div"))
        $("#test").append(await this.execute("multi"))

        $("#test").append(`<h3 class="text-light text-center"> Testes de caso de erro </h3>`)

        $("#test").append(await this.execute("limite_gaveta"))
        this.addInputs(["10000"])
        $("#test").append(await this.execute("erro_input"))
        $("#test").append(await this.execute("restricao_gaveta"))
        $("#test").append(await this.execute("acesso"))
        $("#test").append(await this.execute("epi"))

        Tester.testing = false

    }

}