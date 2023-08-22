import HVC from "./HVC";

export default class EPI {

    private valor:number = 0;

    public registrar(registro: number) {

        if (registro > HVC.config.MAX_GAVETA) {
            HVC.terminal.addError("Erro de sobrecarga da pilha, limite de 100 registros");
            return "erro"
        }

        this.valor = registro;
        return "sucesso"
    }

    public lerRegistro(): number {
        return this.valor;
    }

}