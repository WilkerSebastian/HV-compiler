import * as $ from "jquery"
import HVC from "./HVC"

export default class Config {

    public MAX_GAVETA = 100

    constructor() {
        
        $("#modal-sec").load("./layouts/config.html")

    }

    public loadConfig() {

        $("#aplicar").on("click", e => this.click(e))

        let config = this.download("config") as Configuration

        if (!config) {

            config = {

                editor: {

                    theme: "vs-dark",
                    fontSize: parseInt(`${window.innerWidth * 0.011}`),
                    font: "Arial",
                    script: HVC.editor.getScript().join("\n")
            
                },
                depurador: {
            
                    delay: 200
            
                },
                compilador: {
            
                    gavetas: 100
            
                }

            }

            this.upload("config", config)
            
        }

        this.apply(config)

    }

    public upload(identificador:string , obj:any) {

        const json = JSON.stringify(obj)

        localStorage.setItem(identificador, json)

    }

    public download(identificador:string) {

        const obj = localStorage.getItem(identificador)

        if(!obj) {

            return null

        }

        return JSON.parse(obj)
    }

    private click(e: JQuery.ClickEvent<HTMLElement, undefined, HTMLElement, HTMLElement>) {

        let config:Configuration = {

            editor: {

                theme: $("#theme").val() as "vs-dark" | "vs-light",
                font: $("#font").val() as string,
                fontSize: Number($("#font-size").val()),
                script: HVC.editor.getScript().join("\n")

            },
            depurador: {

                delay: Number($("#delay").val())

            },
            compilador: {

                gavetas: parseInt($("#max-gavetas").val() as string)

            }

        }

        this.apply(config)

    }

    public apply(config:Configuration) {

        HVC.editor.update(config.editor)

        this.model(config)

        this.MAX_GAVETA = config.compilador.gavetas

        HVC.debugger.timeout = config.depurador.delay

        HVC.hvm.resetar()

        this.changeTheme(config.editor.theme == "vs-dark")

        this.upload("config", config)

    }
    private model(config:Configuration) {

        const select = $("#theme") as JQuery<HTMLSelectElement>

        if (config.editor.theme == "vs-dark") {
         
            select.children("option")[0].setAttribute("selected", "selected")
            select.children("option")[1].removeAttribute("selected")

        } else {

            select.children("option")[0].removeAttribute("selected")
            select.children("option")[1].setAttribute("selected", "selected")
            
        }

        $("#font").val(config.editor.font)
        $("#font-size").val(config.editor.fontSize)

        $("#delay").val(config.depurador.delay)
    
        $("#max-gavetas").val(config.compilador.gavetas)

    }

    private changeTheme(dark:boolean) {

        if (dark) {

            $(".bg-light").addClass("bg-dark")
            $(".bg-dark").removeClass("bg-light")

            $(".text-dark").addClass("text-light")
            $(".text-light").removeClass("text-dark")

            $(".table").addClass("table-dark")
            $(".table").removeClass("table-light")
            
        } else {

            $(".bg-dark").addClass("bg-light")
            $(".bg-light").removeClass("bg-dark")

            $(".text-light").addClass("text-dark")
            $(".text-dark").removeClass("text-light")

            $(".table").addClass("table-light")
            $(".table").removeClass("table-dark")

        }
        $(".btn-opt").css("color", `var(${dark ? "--subtitle-text" : "--dark-text"})`)

        $(".block-win").css("background-color", dark ? "#222222" : "#C3C0C4")
        $(".btn-win").css("border-bottom", `75px solid ${dark ? "var(--btn-dark)" : "#e2e2e2"}`)
        $(".btn-win.active").css("border-bottom", `75px solid ${dark ? "var(--dark-solve)" : "#fffffe"}`)

        $("#view-right").css("background-color", dark ? "var(--dark-inter)" : "#C3C0C4")
        $("#commands").css("border-bottom", `15vh solid ${dark ? "#131313" : "#696969"}`)
        $("#terminal").css("color", dark ? "var(--light-text)" : "var(--dark-solve)")
        $("#terminal").css("border", `${dark ? "var(--dark-solve)" : "#fffffe"} 1px solid`)
        $("#terminal").css("background-color", dark ? "var(--dark-solve)" : "#fffffe")

        $(".text-output").css("color", dark ? "var(--light-text)" : "var(--dark-solve)")

        $(".editor").css("background-color", dark ? "var(--dark-inter)" : "#fffffe")

        $("#depuracao").css("color", dark ? "var(--light-text)" : "var(--dark-solve)")
        $("#depuracao").css("background-color", dark ? "var(--dark-solve)" : "var(--light-text)")

        $(".title-debug").css("color", dark ? "var(--cont-title" : "var(--btn-dark)")
        $(".medidor-debug").css("color", dark ? "var(--cont-title" : "var(--btn-dark)")

    }

}

export interface Configuration {

    editor: {

        theme: "vs-light" | "vs-dark",
        fontSize: number,
        font: string
        script: string

    },
    depurador: {

        delay: number

    },
    compilador: {

        gavetas: number

    }   

}