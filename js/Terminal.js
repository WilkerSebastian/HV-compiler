"use strict";
class Terminal {
    constructor() {
        this.input = "";
        $('#inputField').on('keydown', (e) => {
            if (e.key == 'Enter') {
                this.input = $('#inputField').val().trim();
                this.showInput(false);
            }
        });
    }
    clearInput() {
        this.input = "";
    }
    getInput() {
        return this.input;
    }
    showInput(show) {
        $('.input').css("display", show ? "block" : "none");
    }
    clear() {
        $("#outputArea").html("");
    }
    addText(text) {
        $("#outputArea").append(`<span class="text-output">${text}\n</span>`);
    }
    addError(text) {
        $("#outputArea").append(`<span class="text-dangerios">${text}\n</span>`);
    }
    addDebug(text) {
        $("#outputArea").append(`<span class="text-alert">${text}\n</span>`);
    }
}
