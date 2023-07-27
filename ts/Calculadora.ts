class Calculadora {
    
    private acumulador = 0;
    public debug = false;
  
    public soma(valor:number) {
      if (this.debug) {
        terminal.addDebug(`CALCULADORA DEBUG<br>ACUMULADOR ATUAL: ${this.acumulador}<br>OPERAÇÂO: ${this.acumulador} + ${valor} = ${this.acumulador + valor}`);
      }
      if (valor < 0 || valor + this.acumulador > 999) {
        terminal.addError(`Erro na operação ${this.acumulador} + ${valor} = ${valor + this.acumulador}, único valor aceito como resultado é entre 0-999`);
        return "erro"
      }

      this.acumulador += valor;

      return "sucesso"
    }
  
    public subtraia(valor:number) {
      if (this.debug) {
        terminal.addDebug(`CALCULADORA DEBUG<br>ACUMULADOR ATUAL: ${this.acumulador}<br>OPERAÇÂO: ${this.acumulador} - ${valor} = ${this.acumulador - valor}`);
      }
      if (valor < 0 || valor + this.acumulador > 999) {
        terminal.addError(`Erro na operação ${this.acumulador} - ${valor} = ${valor - this.acumulador}, único valor aceito como resultado é entre 0-999`);
        return "erro"
      }
      this.acumulador -= valor;
      return "sucesso"
    }
  
    public multiplicar(valor:number) {
      if (this.debug) {
        terminal.addDebug(`CALCULADORA DEBUG<br>ACUMULADOR ATUAL: ${this.acumulador}<br>OPERAÇÂO: ${this.acumulador} * ${valor} = ${this.acumulador * valor}`);
      }
      if (valor < 0 || valor + this.acumulador > 999) {
        terminal.addError(`Erro na operação ${this.acumulador} * ${valor} = ${valor * this.acumulador}, único valor aceito como resultado é entre 0-999`);
        return "erro"
      }
      this.acumulador *= valor;
      return "sucesso"
    }
  
    public divida(valor:number) {
      if (this.debug) {
        terminal.addDebug(`CALCULADORA DEBUG<br>ACUMULADOR ATUAL: ${this.acumulador}<br>OPERAÇÂO: ${this.acumulador} / ${valor} = ${this.acumulador / valor}`);
      }
      if (valor < 0 || valor + this.acumulador > 999) {
        terminal.addError(`Erro na operação ${this.acumulador} / ${valor} = ${valor / this.acumulador}, único valor aceito como resultado é entre 0-999`);
        return "erro"
      }
      this.acumulador /= valor;
      return "sucesso"
    }

    public acumular(valor:number) {
    
        if(this.debug) {
    
            terminal.addDebug(`CALCULADORA DEBUG<br>ACUMULADOR ATUAL: ${this.getAcumulador()}<br>OPERAÇÂO: ${this.getAcumulador()} = ${valor}`);
    
        }
    
        if(valor < 0 || valor > 999) {
    
            terminal.addError(`Erro na escrita do valor ${valor} no gaveteiro. Apenas valores entre 0-999 são aceitos.`);
            return "erro"

        }
    
        this.acumulador = valor;

        return "sucesso"
    
    }
    
    public getAcumulador() {
    
        return this.acumulador;
    
    }

}