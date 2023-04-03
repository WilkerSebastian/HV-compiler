"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Terminal {
    constructor() {
        this.index = 0;
        this.input = "";
    }
    scan(text) {
        return __awaiter(this, void 0, void 0, function* () {
            this.index++;
            this.input = "";
            $("#outputArea").append(`
            <div class="d-flex">
                <span class="labelField">${text}</span>
                <input type="text" class="inputField" id="inputField-${this.index}">
            </div>
        `);
            $("body").on('keydown', (e) => {
                if (e.key == 'Enter' || this.input != "") {
                    const value = $(`#inputField-${this.index}`).val().trim();
                    this.input = value != "" ? value : "\n";
                    $(`#inputField-${this.index}`).attr("disabled", "disabled");
                }
            });
            return yield this.getBuffer();
        });
    }
    getBuffer() {
        return __awaiter(this, void 0, void 0, function* () {
            while (this.input === "") {
                yield new Promise(resolve => setTimeout(resolve, 10));
            }
            return this.input;
        });
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
