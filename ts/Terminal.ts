class Terminal {

    private input = "";

    constructor() {

        $('#inputField').on('keydown', (e) => {
            if (e.key == 'Enter') {

              this.input = ($('#inputField').val() as string).trim();

              this.showInput(false)

            }
        });

    }

    public clearInput() {

        this.input = ""

    }

    public getInput() {

        return this.input

    }

    public showInput(show:boolean) {

        $('.input').css("display", show ? "block":"none")

    }

    public clear() {

        $("#outputArea").html("")

    }

    public addText(text:string) {

        $("#outputArea").append(`<span class="text-output">${text}\n</span>`)

    }

    public addError(text:string) {

        $("#outputArea").append(`<span class="text-dangerios">${text}\n</span>`)

    }

    public addDebug(text:string) {

        $("#outputArea").append(`<span class="text-alert">${text}\n</span>`)

    }

}