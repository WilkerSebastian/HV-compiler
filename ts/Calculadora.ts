class Calculadora {
    
    private acumulador = 0;
    public debug = false;
  
    public soma(valor:number) {
      if (this.debug) {
        terminal.addText(`CALCULADORA DEBUG\nACUMULADOR ATUAL: ${this.acumulador}\nOPERAÇÂO: ${this.acumulador} + ${valor} = ${this.acumulador + valor}`);
      }
      if (valor < 0 || valor + this.acumulador > 999) {
        terminal.addError(`Erro na operação ${this.acumulador} + ${valor} = ${valor + this.acumulador}, único valor aceito como resultado é entre 0-999`);
        return "erro"
      }

      this.acumulador += valor;

      return "sucesso"
    }
  
    public subrtaia(valor:number) {
      if (this.debug) {
        terminal.addText(`CALCULADORA DEBUG\nACUMULADOR ATUAL: ${this.acumulador}\nOPERAÇÂO: ${this.acumulador} - ${valor} = ${this.acumulador - valor}`);
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
        terminal.addText(`CALCULADORA DEBUG\nACUMULADOR ATUAL: ${this.acumulador}\nOPERAÇÂO: ${this.acumulador} * ${valor} = ${this.acumulador * valor}`);
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
        terminal.addText(`CALCULADORA DEBUG\nACUMULADOR ATUAL: ${this.acumulador}\nOPERAÇÂO: ${this.acumulador} / ${valor} = ${this.acumulador / valor}`);
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
    
            terminal.addText(`CALCULADORA DEBUG<br>ACUMULADOR ATUAL: ${this.getAcumulador()}<br>OPERAÇÂO: ${this.getAcumulador()} = ${valor}`);
    
        }
    
        if(valor < 0 || valor > 999) {
    
            terminal.addError(`Erro na escrita do acumulador, do valor ${valor}, unico valor aceito é entre 0-999`);
            return "erro"

        }
    
        this.acumulador = valor;

        return "sucesso"
    
    }
    
    public getAcumulador() {
    
        return this.acumulador;
    
    }

}