import HVC from "./HVC";
import PortaCartoes from "./PortaCartoes";

export default class Gaveteiro {
  
    private restritos: number[] = [];
    private ultimoRestrito:number = 0;
    private gavetas: string[];

    public carga(portaCartao:PortaCartoes){

      let len = portaCartao.conteudo.length
      let i = 0;
      let final = false;

      while(i < len && !final){
        
        let cartao = portaCartao.conteudo.shift()

        if (cartao){
          if(this.registrar(i, cartao) == "erro"){
            return "erro"
          }
          this.ultimoRestrito = i;
        }
        else{
          final = true;
        }
        if(cartao === "000"){
          final = true;
        }

        i++;
      } 
      
      return "sucesso"
    }
  
    public registrar(endereco: number, valor: string) {
      
      if(endereco + 1 >= HVC.config.MAX_GAVETA) {

        HVC.terminal.addError("\nErro de sobrecarga da pilha, limite de 100 registros")
        return "erro"

      } else {

        if(endereco < this.ultimoRestrito){
            const conteudo = this.ler(endereco);
            HVC.terminal.addError(`\nErro tentativa de sobrescrita de gaveta que armazena código fonte\nconteúdo da gaveta(${endereco}): ${conteudo}\n`);
            return "erro";
        }
    
        this.gavetas[endereco] = valor;

      }

      return "sucesso"
    }
  
    public ler(endereco: number){

      if (endereco < 0 || endereco > HVC.config.MAX_GAVETA || !this.gavetas[endereco]) {                                   
        HVC.terminal.addError(`\nErro na leitura do gaveteiro no endereço ${endereco}, tentativa de leitura em endereço inexistente\n`);
        return "erro";
      }
      
  
      return this.gavetas[endereco] as string;
    }

    public updateGaveteiro() {

      this.gavetas = []

    }

    public getRestByInstruct(inst:string) {

      return this.gavetas.indexOf(inst)

    }

  }
  