class PortaCartoes {

    public debug = false

    public async lerCartao() {

        const input = await terminal.scan("Informe o valor de 3 algarismos do cartão: ");
        
        if(this.debug) {
    
            terminal.addDebug(`-----------------------------<br>ENTRADA DE CARTÃO<br> valor recebido: ${input}`);
    
        }
    
        const valor = parseInt(input)
    
        if(valor < 0 || valor > 999) {
    
            terminal.addError(`Erro na escrita do valor ${valor} no gaveteiro. Apenas valores entre 0-999 são aceitos.`);
            return "erro"
    
        }
    
        return valor
    
    }

}