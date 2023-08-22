import * as monaco from "monaco-editor"
import * as $ from "jquery"

export default class Editor {

    private editorMonaco:monaco.editor.IStandaloneCodeEditor
    private arquivo = "script.ahv"

    constructor() {

        // @ts-ignore
        self.MonacoEnvironment = {
            getWorkerUrl: function (moduleId, label) {
                if (label === 'json') {
                    return '../public/js/dist/json.worker.bundle.js';
                }
                if (label === 'css' || label === 'scss' || label === 'less') {
                    return '../public/js/dist/css.worker.bundle.js';
                }
                if (label === 'html' || label === 'handlebars' || label === 'razor') {
                    return '../public/js/dist/html.worker.bundle.js';
                }
                if (label === 'typescript' || label === 'javascript') {
                    return '../public/js/dist/ts.worker.bundle.js';
                }
                return '../public/js/dist/editor.worker.bundle.js';
            }
        };

        this.editorMonaco = monaco.editor.create(document.getElementById("editor"), {
            value: '',
            theme: "vs-dark",
            language: 'plaintext',
            fontFamily: "Arial",
            fontSize: parseInt(`${window.innerWidth * 0.011}`)
        });

        this.rename("script.ahv")

    }

    public update(codeEditor:{theme: "vs-light" | "vs-dark";fontSize: number;font: string; script:string}) {

        for (let index = 0; index < document.getElementById("editor").children.length; index++) {
            
            document.getElementById("editor").children[index].remove()

        }

        this.editorMonaco = monaco.editor.create(document.getElementById("editor"), {
            value: codeEditor.script,
            theme: codeEditor.theme,
            language: 'plaintext',
            fontFamily: codeEditor.font,
            fontSize: codeEditor.fontSize
        });

    }

    public rename(name:string) {

        this.arquivo = name

        $("#btn-code").children("div").children("p").text(name)

    }

    public getNameFile() {

        return this.arquivo

    }

    public getScript() {

        const script = this.editorMonaco.getValue()

        return script.split("\n")

    }

    public setScript(script:string) {

        this.editorMonaco.setValue(script)

    }

}