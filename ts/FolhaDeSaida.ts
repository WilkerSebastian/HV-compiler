class FolhaDeSaida {
    public debug = false;
    
    public imprimir(texto: string) {
        terminal.addText(`\nfolha de saida: ${texto}\n`);

        return "sucesso"
    }
}