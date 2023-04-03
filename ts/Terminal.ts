/*
<span id="labelField"></span>
<input type="text" id="inputField">
*/

class Terminal {

    private index = 0;
    private input = "";

    public async scan(text:string) {

        this.index++

        this.input = ""

        $("#outputArea").append(`
            <div class="d-flex">
                <span class="labelField">${text}</span>
                <input type="text" class="inputField" id="inputField-${this.index}">
            </div>
        `)

        $("body").on('keydown', (e) => {

            if(e.key == 'Enter' || this.input != "") {
    
                const value = ($(`#inputField-${this.index}`).val() as string).trim()

                this.input = value != "" ? value : "\n";
    
                $(`#inputField-${this.index}`).attr("disabled" , "disabled")

            }

        });

        return await this.getBuffer()

    }

    private async getBuffer() {

        while(this.input === "") {
          await new Promise(resolve => setTimeout(resolve, 10));
        }

        return this.input;
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