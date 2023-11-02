import HVC from "../HVC";

export default class FolhaDeSaida {
    
    public imprimir(texto: string) {
        HVC.terminal.addText(`\nfolha de saida: ${texto}\n`);

        return "sucesso"
    }
}