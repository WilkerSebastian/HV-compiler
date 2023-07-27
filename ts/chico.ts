class Chico {

    public debug = false

    public carregarGaveteiro(gaveterio:Gaveteiro, script:string[]) {

        return gaveterio.carga(script)

    }

    public proximaInstrucao(gaveteiro:Gaveteiro , epi:EPI) {

        const registroAtual = epi.lerRegistro();
    
        epi.registrar(registroAtual + 1);
    
        return gaveteiro.ler(registroAtual);
     
    }

    public cpEE(calculadora:Calculadora, gaveteiro:Gaveteiro, endereco:number) {

        const valor = parseInt(gaveteiro.ler(endereco));
    
        return calculadora.acumular(valor);
    
    }

    public cpAC(calculadora:Calculadora, gaveteiro:Gaveteiro, endereco:number) {

        const acumulador = calculadora.getAcumulador();
    
        return gaveteiro.registrar(endereco, acumulador.toString());
    
    }

    public some(calculadora:Calculadora, gaveteiro:Gaveteiro, endereco:number) {

        const valor = parseInt(gaveteiro.ler(endereco));
    
        return calculadora.soma(valor);
    
    }

    public subtraia(calculadora:Calculadora, gaveteiro:Gaveteiro, endereco:number) {

        const valor = parseInt(gaveteiro.ler(endereco));
    
        return calculadora.subtraia(valor);
    
    }    

    public multiplique(calculadora:Calculadora, gaveteiro:Gaveteiro, endereco:number) {

        const valor = parseInt(gaveteiro.ler(endereco));
    
        return calculadora.multiplicar(valor);
    
    }
    
    public divida(calculadora:Calculadora, gaveteiro:Gaveteiro, endereco:number) {
    
        const valor = parseInt(gaveteiro.ler(endereco));
    
        return calculadora.divida(valor);
    
    }
    
    public se(calculadora:Calculadora, epi:EPI, endereco:number) {
    
        if(this.debug) {
    
            terminal.addDebug(`se (${calculadora.getAcumulador()} > 0): ${calculadora.getAcumulador() > 0 ? "verdadeiro" : "falso"} <br>EPI redirecionado para ${endereco}`)
    
        }
        if(calculadora.getAcumulador() > 0) {
    
            return epi.registrar(endereco);
    
        }

        return "sucesso"
    
    }
    
    public async leia(gaveteiro:Gaveteiro, pc:PortaCartoes, endereco:number) {
    
        const valor = await pc.lerCartao();
    
        return gaveteiro.registrar(endereco, valor.toString());
    
    }
    
    public escreva(gaveteiro:Gaveteiro, fs:FolhaDeSaida, endereco:number) {
    
        const output = gaveteiro.ler(endereco);
    
        return fs.imprimir(output);
    
    }
    
    public para(epi:EPI, endereco:number) { // Ir para
    
        if (this.debug) {
         
            terminal.addDebug(`EPI redirecionando para ${endereco}`);

        }
     
        return epi.registrar(endereco);
    
    }
    
    public constante( calculadora:Calculadora, valor:number) {
    
        return calculadora.acumular(valor);
    
    }
    
    public pare() { //Finalizar
    
        terminal.addText("Programa finalizado com sucesso!");
    
        return "finalizar";
    
    }
    

}