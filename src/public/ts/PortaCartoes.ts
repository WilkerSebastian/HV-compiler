import HVC from "./HVC";

export default class PortaCartoes {

    public async lerCartao() {

        const input = await HVC.terminal.scan("Informe o valor de 3 algarismos do cartão: ");
    
        const valor = parseInt(input)
    
        if(valor < 0 || valor > 999) {
    
            HVC.terminal.addError(`Erro na escrita do valor ${valor} no gaveteiro. Apenas valores entre 0-999 são aceitos.`);
            return "erro"
    
        }
    
        return valor
    
    }

}