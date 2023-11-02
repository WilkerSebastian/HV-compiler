import HVC from "../HVC";
import Gaveteiro from "./Gaveteiro";
import EPI from "./EPI";
import Calculadora from "./Calculadora";
import FolhaDeSaida from "./FolhaDeSaida";
import PortaCartoes from "./PortaCartoes";

export default class Chico {

    public leitura_Inicial(portaCartao:PortaCartoes,script:string[]){

        portaCartao.carregar(script)
    }


    public carga(gaveteiro:Gaveteiro, portaCartao:PortaCartoes){
        
        return gaveteiro.carga(portaCartao);
    }

    public async proximaInstrucao(gaveteiro:Gaveteiro , epi:EPI) {

        let registro = "null"

        const registroAtual = epi.lerRegistro();

        HVC.debugger.intrepetando(registroAtual)
        
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

        HVC.debugger.adicionarGaveteiro({ 
            gaveta: endereco.toString(),
            valor: acumulador.toString()
        })
    
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

        const g = gaveteiro.getRestByInstruct(`7${endereco < 10 ? "0" + endereco : endereco}`).toString()

        HVC.debugger.adicionarGaveteiro({

            gaveta: g,
            instrucao: `7${endereco < 10 ? "0" + endereco : endereco}`,
            epi: g,
            pc: valor.toString()

        })

        HVC.debugger.adicionarGaveteiro({

            gaveta: endereco.toString(),
            valor: valor.toString()

        })

        HVC.debugger.intrepetando(Number(g))
    
        return gaveteiro.registrar(endereco, valor.toString());
    
    }
    
    public escreva(gaveteiro:Gaveteiro, fs:FolhaDeSaida, endereco:number) {
    
        const output = gaveteiro.ler(endereco);

        //E se tiver a mesma instrução duas vezes???

        const g = gaveteiro.getRestByInstruct(`8${endereco < 10 ? "0" + endereco : endereco}`).toString()

        HVC.debugger.adicionarGaveteiro({

            gaveta: g,
            instrucao: `8${endereco < 10 ? "0" + endereco : endereco}`,
            epi:g,
            fs: output

        })

        HVC.debugger.intrepetando(Number(g))
    
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