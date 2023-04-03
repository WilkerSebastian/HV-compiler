class EPI {

    private valor:number = 0;

    public debug:boolean = false;

    public registrar(registro: number) {

        if (registro > 99) {
            terminal.addError("Erro de sobrecarga da pilha, limite de 100 registros");
            return "erro"
        }

        this.valor = registro;
        return "sucesso"
    }

    public lerRegistro(): number {
        return this.valor;
    }

}