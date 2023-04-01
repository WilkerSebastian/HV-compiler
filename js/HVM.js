"use strict";
class HVM {
    constructor() {
        this.debug = false;
    }
    run(debug) {
        this.debug = debug !== null && debug !== void 0 ? debug : false;
        const script = editor.getScript();
        this.assembly(script);
    }
    assembly(script) {
        script = this.lexer(script);
        for (let index = 0; index < script.length; index++) {
            if (!this.validSyntax(script[index])) {
                terminal.addError(`Erro de syntax na linha ${index + 1} ${script[index]}`);
                return;
            }
        }
    }
    save() {
        const blob = new Blob([editor.getScript().join("\n")], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = "script.ahv";
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    validSyntax(line) {
        let valid = false;
        const rules = [/^[0-9][0-9][0-9]$/, /^0-([0-9]{1,3})$/];
        for (let index = 0; index < rules.length; index++) {
            if (rules[index].test(line)) {
                valid = true;
                break;
            }
        }
        return valid;
    }
    lexer(script) {
        return script.map(e => e.trim());
    }
}
