import Calculadora from "./Calculadora"
import Chico from "./Chico"
import EPI from "./EPI"
import FolhaDeSaida from "./FolhaDeSaida"
import Gaveteiro from "./Gaveteiro"
import HVC from "./HVC"
import PortaCartoes from "./PortaCartoes"

export default class HVM {

    private calculadora = new Calculadora()
    private chico = new Chico()
    private epi = new EPI()
    private folhaDeSaida = new FolhaDeSaida()
    private gaveteiro = new Gaveteiro()
    private portaCartoes = new PortaCartoes()

    public runner = false

    public async run() {

        this.runner = true

        HVC.terminal.clear()

        this.resetar()

        const script = HVC.editor.getScript()

        await this.assembly(script)

        return 0

    }

    public async assembly(array:string[]) {

        const script = this.lexer(array)

        if (script.length == 0) {
            
            alert("Você tentou executar um código vazio!")
            return 1

        }

        this.chico.leitura_Inicial(this.portaCartoes, script);
        let retorno:string | number = this.chico.carga(this.gaveteiro, this.portaCartoes);

        // let retorno:string | number = this.chico.carregarGaveteiro(this.gaveteiro, script)

        if (retorno == "erro") {
            
            return -1

        }

        do {

            if (HVC.debugger.debug) {
             
                await HVC.sleep(HVC.debugger.timeout);

            }

            const instrucao = await this.chico.proximaInstrucao(this.gaveteiro, this.epi)
            
            if (RegExp("000").test(instrucao)){
                retorno = this.chico.pare()
            }

            if(retorno == "finalizar") {

                return 0

            }

            let EE = parseInt(instrucao.substring(1, 3))

            if (RegExp("^0[0-9]{2}$").test(instrucao) && instrucao != "000") {
                
                retorno = this.chico.cpEE(this.calculadora, this.gaveteiro, EE)

            }
            else if (RegExp("^1[0-9]{2}$").test(instrucao)) {
                
                retorno = this.chico.cpAC(this.calculadora, this.gaveteiro, EE)

            }
            else if (RegExp("^2[0-9]{2}$").test(instrucao)) {
                
                retorno = this.chico.some(this.calculadora, this.gaveteiro, EE)

            }
            else if (RegExp("^3[0-9]{2}$").test(instrucao)) {
                
                retorno = this.chico.subtraia(this.calculadora, this.gaveteiro, EE)

            }
            else if (RegExp("^4[0-9]{2}$").test(instrucao)) {

                retorno = this.chico.multiplique(this.calculadora, this.gaveteiro, EE)
                
            }
            else if (RegExp("^5[0-9]{2}$").test(instrucao)) {
                
                retorno = this.chico.divida(this.calculadora, this.gaveteiro, EE)

            }
            else if (RegExp("^6[0-9]{2}$").test(instrucao)) {
                
                retorno = this.chico.se(this.calculadora, this.epi, EE)

            }
            else if (RegExp("^7[0-9]{2}$").test(instrucao)) {
                
                retorno = await this.chico.leia(this.gaveteiro, this.portaCartoes, EE)

            }
            else if (RegExp("^8[0-9]{2}$").test(instrucao)) {
                
                retorno = this.chico.escreva(this.gaveteiro, this.folhaDeSaida, EE)

            }
            else if (RegExp("^9[0-9]{2}$").test(instrucao)) {

                retorno = this.chico.para(this.epi, EE)

            }
            else if (RegExp("^0-\\d{1,3}$").test(instrucao)) {
                
                const regex = RegExp("\\d{1,3}$")

                EE = parseInt((instrucao.match(regex) as RegExpMatchArray)[0])

                retorno = this.chico.constante(this.calculadora, EE)

            } else {

                HVC.terminal.addError(`Erro de sintaxe! Linha ${this.epi.lerRegistro()}: ${instrucao}`)
                return 1

            }

            if (HVC.debugger.debug) {
                
                HVC.debugger.atualizarEPI(`${this.epi.lerRegistro()}`)
                HVC.debugger.autalizarAcumulador(`${this.calculadora.getAcumulador()}`)

            }

            if(!this.runner) {

                this.runner = false

                return 3

            }

        } while(retorno != "erro");

        this.runner = false

        return 1 

    }

    public save() {

        const blob = new Blob([HVC.editor.getScript().join("\n")], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.download = HVC.editor.getNameFile();
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

    }

    public validSyntax(line:string) {

        let valid = false

        const rules = [/^[0-9]{3}$/, /^0-\d{1,3}$/]

        for (let index = 0; index < rules.length; index++) {

            if (rules[index].test(line)) {
                
                valid = true
                break

            }
            
        }

        return valid

    }

    public lexer(script:string[]) {

        const newScript = script.map(e => e.trim())

        return newScript;

    }

    public resetar() {

        this.calculadora = new Calculadora()
        this.chico = new Chico()
        this.epi = new EPI()
        this.folhaDeSaida = new FolhaDeSaida()
        this.gaveteiro = new Gaveteiro()
        this.gaveteiro.updateGaveteiro()
        this.portaCartoes = new PortaCartoes()

    }

} 