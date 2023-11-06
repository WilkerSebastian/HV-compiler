import HVC from "../HVC";
import Gaveteiro from "./Gaveteiro";
import EPI from "./EPI";
import Calculadora from "./Calculadora";
import FolhaDeSaida from "./FolhaDeSaida";
import PortaCartoes from "./PortaCartoes";

export default class Chico {

    public async leitura_Inicial(portaCartao:PortaCartoes,script:string[]){

        await portaCartao.carregar(script)

    }

    public carga(gaveteiro:Gaveteiro, portaCartao:PortaCartoes){
        
        return gaveteiro.carga(portaCartao);
    }

    public async proximaInstrucao(gaveteiro:Gaveteiro , epi:EPI) {

        let registro = "null"

        const registroAtual = epi.lerRegistro();
        
        epi.registrar(registroAtual + 1);
                
        registro = gaveteiro.ler(registroAtual);

        return registro
     
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
     
        return epi.registrar(endereco);
    
    }
    
    public constante( calculadora:Calculadora, valor:number) {
    
        return calculadora.acumular(valor);
    
    }
    
    public pare() { //Finalizar
    
        HVC.terminal.addText("Programa finalizado com sucesso!");
    
        return "finalizar";
    
    }
    

}