class HVM {

    private debug = false
    private calculadora = new Calculadora()
    private chico = new Chico()
    private epi = new EPI()
    private folhaDeSaida = new FolhaDeSaida()
    private gaveteiro = new Gaveteiro()
    private portaCartoes = new PortaCartoes()

    public runner = false

    public async run(debug?:boolean) {

        this.runner = true

        terminal.clear()

        this.resetar()

        this.setDebug(debug ?? false)

        const script = editor.getScript()

        await this.assembly(script)

        return 0

    }

    public async assembly(script:string[]) {

        script = this.lexer(script)

        if (script.length == 0) {
            
            alert("Você tentou executar um código vazio!")
            return 1

        }

        // for (let index = 0; index < script.length; index++) {
    
        //     if(!this.validSyntax(script[index])) {

        //         terminal.addError(`Erro de sintaxe na linha ${index + 1} ${script[index]}`)
        //         return

        //     }
            
        // }

        if(this.debug) {

            terminal.addDebug("-------------------------------\nDEBUG ASSEMBLY\n-------------------------------\n");
          
        }

        console.log(script);

        let retorno:string | number = this.chico.carregarGaveteiro(this.gaveteiro, script)

        do {
            
            if(this.debug) {

                terminal.addDebug("-------------------------------\n")

            }
            
            const instrucao = this.chico.proximaInstrucao(this.gaveteiro, this.epi)
            
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

                terminal.addError(`Erro de sintaxe! Linha ${this.epi.lerRegistro()}: ${instrucao}`)
                return 1

            }

            if(this.debug && !(retorno == "erro" || retorno == "finalizar")) {

                terminal.addDebug(`-------------------------------<br>DEBUG LOG<br>INSTRUÇÃO: ${instrucao}<br>EE: ${EE}`)

            }

            if(!this.runner) {

                this.runner = false

                return 3 // TRÊS

            }

        } while(retorno != "erro");

        this.runner = false

        return 1 

    }

    public save() {

        const blob = new Blob([editor.getScript().join("\n")], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a'); // A

        link.download = "script.ahv";
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

        return script.map(e => e.trim())

    }

    private setDebug(debug:boolean) {

        this.debug = debug
        this.calculadora.debug = debug
        this.chico.debug = debug
        this.epi.debug = debug
        this.folhaDeSaida.debug = debug
        this.gaveteiro.debug = debug
        this.portaCartoes.debug = debug

    }

    private resetar() {

        this.calculadora = new Calculadora()
        this.chico = new Chico()
        this.epi = new EPI()
        this.folhaDeSaida = new FolhaDeSaida()
        this.gaveteiro = new Gaveteiro()
        this.portaCartoes = new PortaCartoes()

    }

} 