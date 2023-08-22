import * as $ from "jquery"

export default class GUI {

    public static WIDTH = window.innerWidth
    public static HEIGHT = window.innerHeight
    public static MOBILE = GUI.WIDTH < 768;

    private code = $(".edtior")
    private terminal = $("#terminal")
    private debugger = $("#depuracao")

    constructor() {

        if(GUI.MOBILE) {

            this.code.css("display", "block")
            this.terminal.css("display", "none")
            this.debugger.css("display", "none")


        } else {

            this.code.css("display", "block")
            this.terminal.css("display", "block")
            this.debugger.css("display", "none")

        }

        $(".btn-win").on("click", (e) => {

            this.change(e.currentTarget.id)

            this.event(e.currentTarget.getAttribute("operation") as string)

        })

    }

    private change(button:string) {

        if(GUI.MOBILE)  {

            switch (button) {
                case "btn-code":
                    
                    $("#btn-code").addClass("active")
                    $("#btn-ter").removeClass("active")
                    $("#btn-dep").removeClass("active")

                    break;
                case "btn-ter":

                    $("#btn-code").removeClass("active")
                    $("#btn-ter").addClass("active")
                    $("#btn-dep").removeClass("active")

                    break;
                case "btn-dep":

                    $("#btn-code").removeClass("active")
                    $("#btn-ter").removeClass("active")
                    $("#btn-dep").addClass("active")

                    break;
            }

        } else {

            switch (button) {
                case "btn-ter":

                    $("#btn-ter").addClass("active")
                    $("#btn-dep").removeClass("active")

                    break;
                case "btn-dep":

                    $("#btn-ter").removeClass("active")
                    $("#btn-dep").addClass("active")

                    break;
            }

        }

    }

    private event(operation:string) {

        if(GUI.MOBILE)  {

            switch (operation) {
                case "code":

                    this.code.css("display", "block")
                    this.terminal.css("display", "none")
                    this.debugger.css("display", "none")
                    
                    break;            
                case "terminal":

                    this.code.css("display", "none")
                    this.terminal.css("display", "block")
                    this.debugger.css("display", "none")

                    break;
                case "debugger":

                    this.code.css("display", "none")
                    this.terminal.css("display", "none")
                    this.debugger.css("display", "block")

                    break

            }       

        } else {

            switch (operation) {
                case "terminal":

                    this.terminal.css("display", "block")
                    this.debugger.css("display", "none")

                    break;
                case "debugger":

                    this.terminal.css("display", "none")
                    this.debugger.css("display", "block")

                    break;

            } 

        }
    }

}