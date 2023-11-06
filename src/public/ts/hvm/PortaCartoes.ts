import HVC from "../HVC";

export default class PortaCartoes {

    public conteudo:string[] = []

    public async carregar(script: string[]){
        
        script.forEach(e =>{
            this.conteudo.push(e);
            HVC.debugger.atualizarPortaCartoes(this.conteudo)
        })
        
    }

    public async lerCartao() {

        let valor: number;

        if (this.conteudo.length > 0) {

            valor = parseInt(this.conteudo.shift())
            HVC.debugger.atualizarPortaCartoes(this.conteudo)

        }
        else {

            const input = await HVC.terminal.scan("Informe o valor de 3 algarismos do cartão: ");
        
            valor = parseInt(input)

        }
    
        if(valor < 0 || valor > 999) {
    
            HVC.terminal.addError(`Erro na escrita do valor ${valor} no gaveteiro. Apenas valores entre 0-999 são aceitos.`);
            return "erro"
    
        }
    
        return valor
    
    }

}