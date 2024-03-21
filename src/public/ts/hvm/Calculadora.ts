import HVC from "../HVC";

export default class Calculadora {
    
    private acumulador = 0;
  
    public soma(valor:number) {
      
      if (valor + this.acumulador > 999) {
        HVC.terminal.addError(`Erro na operação ${this.acumulador} + ${valor} = ${valor + this.acumulador}, único valor aceito como resultado é entre 0-999`);
        return "erro"
      }

      this.acumulador += valor;

      return "sucesso"
      
    }
  
    public subtraia(valor:number) {
      
      if (this.acumulador - valor > 999) {
        HVC.terminal.addError(`Erro na operação ${this.acumulador} - ${valor} = ${valor - this.acumulador}, único valor aceito como resultado é entre 0-999`);
        return "erro"
      }
      this.acumulador -= valor;
      return "sucesso"
    }
  
    public multiplicar(valor:number) {
      
      if (valor * this.acumulador > 999) {
        HVC.terminal.addError(`Erro na operação ${this.acumulador} * ${valor} = ${valor * this.acumulador}, único valor aceito como resultado é entre 0-999`);
        return "erro"
      }
      this.acumulador *= valor;
      return "sucesso"
    }
  
    public divida(valor:number) {

      if (valor < 0 || valor / this.acumulador > 999) {
        HVC.terminal.addError(`Erro na operação ${this.acumulador} / ${valor} = ${valor / this.acumulador}, único valor aceito como resultado é entre 0-999`);
        return "erro"
      }
      // this.acumulador = parseInt((parseInt(this.acumulador.toString()) / parseInt(valor.toString())).toString());

      this.acumulador = Math.floor(this.acumulador / valor)
      return "sucesso"

    }

    public acumular(valor:number) {
    
        if(valor < 0 || valor > 999) {
    
            HVC.terminal.addError(`Erro na escrita do valor ${valor} no gaveteiro. Apenas valores entre 0-999 são aceitos.`);
            return "erro"

        }
    
        this.acumulador = valor;

        return "sucesso"
    
    }
    
    public getAcumulador() {
    
      return this.acumulador;
    
    }

}