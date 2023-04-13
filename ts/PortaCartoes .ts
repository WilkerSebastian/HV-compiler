class PortaCartoes {

    public debug = false

    public async lerCartao() {

        const input = await terminal.scan("Informe o valor de 3 algarimos do cartão: ");
        
        if(this.debug) {
    
            terminal.addDebug(`ENTRADA DE CARTÂO valor recebido: ${input}`);
    
        }
    
        const valor = parseInt(input)
    
        if(valor < 0 || valor > 999) {
    
            terminal.addError(`Erro na escrita do gaveteiro, do valor ${valor},unico valor aceito é entre 0-999 `);
            return "erro"
    
        }
    
        return valor
    
    }

}