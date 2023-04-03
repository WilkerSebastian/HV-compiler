class Gaveteiro {
    private restritos: number[] = [];
    private gavetas: string[] = new Array(100);
    public debug: boolean = false;
  
    public carga(registros: string[]) {
      if (this.debug) {
        terminal.addDebug("INICIANDO PROCESSO DE CARGA\n---------------------------\n");
      }
  
      for (let i = 0; i < registros.length; i++) {
        if (this.debug) {
          terminal.addDebug(`${i}: ${registros[i]}\n`);
        }
        this.gavetas[i] = registros[i];
        this.restritos.push(i);
      }
  
      if (this.debug) {
        terminal.addDebug("-----------------------------\nFINALIZANDO PROCESSO DE CARGA\n");
      }

      return "sucesso"
    }
  
    public registrar(endereco: number, valor: string) {
      if (this.debug) {
        terminal.addDebug(`GAVETEIRO DEBUG\ngravando na gaveta (${endereco}) com valor ${valor}\n`);
      }
  
      for (let i = 0; i < this.restritos.length; i++) {
        if (this.restritos[i] === endereco) {
          const conteudo = this.ler(endereco);
          terminal.addError(`\nErro tentativa de sobrescrita de gaveta que armazena código fonte\nconteudo da gaveta(): ${conteudo}\n`);
          return "erro";
        }
      }
  
      this.gavetas[endereco] = valor;

      return "sucesso"
    }
  
    public ler(endereco: number){

      if (endereco < 0 || endereco > 99) {
        console.error(`Erro na leitura do gaveteiro no endereço ${endereco}, tentativa de registro em endereço inexistente\n`);
        return "erro";
      }
  
      return this.gavetas[endereco] as string;
    }
  }
  