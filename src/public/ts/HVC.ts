import * as $ from "jquery";
import Debugger from "./UI/Debugger";
import HVM from "./hvm/HVM";
import Terminal from "./UI/Terminal";
import Editor from "./UI/Editor";
import Config from "./UI/Config";
import GUI from "./UI/GUI";
import FeedBack from "./UI/FeedBack";
import Tester from "./test/Tester";

class HVC {

    public static hvm = new HVM();  
    public static editor = new Editor()
    public static terminal = new Terminal()
    public static debugger = new Debugger()
    public static config = new Config()
    public static feedback = new FeedBack()
    private tester:Tester;
    
    constructor() {

        this.tester = new Tester()

        document.addEventListener("keydown", async(e) => {

            if (e.ctrlKey && e.shiftKey && (e.key == "k" || e.key == "K")) {
             
                this.tester.run()

            }

        })

        new GUI()
        this.eventosMenuInferior()
        this.eventosMenuSuperior()

    }

    public bloqueia(ativo:boolean) {

        if (!ativo) {
    
            $("#cstop").css("display", "none")
            $("#run").css("display", "block")
            $("#debug").removeAttr("disabled")         
            $('.btn-opt[operation="run"]').css("display", "block")
            $('.btn-opt[operation="stop"]').css("display", "none")
            
            return
    
        }
    
        $("#cstop").css("display", "block")
        $("#run").css("display", "none");
        $("#debug").attr("disabled", "disabled")
        $('.btn-opt[operation="run"]').css("display", "none")
        $('.btn-opt[operation="stop"]').css("display", "block")
    
    }

    private eventosMenuInferior() {
        
        $("#run").on("click", async() => {

            $('.btn-opt[operation="run"]').trigger("click")

        })
        $("#stop").on("click", () => {

            $('.btn-opt[operation="stop"]').trigger("click")

        })
        $("#debug").on("click", async() => {

            $('.btn-opt[operation="debug"]').trigger("click")

        })
        $("#save").on("click", () => {

            $('.btn-opt[operation="save"]').trigger("click")

        })

    }

    public eventosMenuSuperior()  {

        $('.btn-opt[operation="run"]').on("click", async() => {
            
            this.bloqueia(true)

            HVC.debugger.debug = false;

            HVC.feedback.mostrar()
        
            const exit = await HVC.hvm.run()
            
            HVC.debugger.viewState()
                    
            if (!isNaN(exit)) {
                            
                this.bloqueia(false)
                    
                return
                    
            }
        
        })
        $('.btn-opt[operation="stop"]').on("click", async() => {
        
            HVC.terminal.controle = false
        
            HVC.hvm.runner = false

            HVC.debugger.viewState()
        
            setTimeout(() => HVC.terminal.controle = true, 10)
        
        })
        $('.btn-opt[operation="debug"]').on("click", async() => {
        
            this.bloqueia(true)

            HVC.debugger.debug = true;

            HVC.debugger.clear()
        
            const exit = await HVC.hvm.run()

            HVC.debugger.viewState()
                
            if (!isNaN(exit)) {
                        
                this.bloqueia(false)
                
                return
                
            }
        
        })
        $('.btn-opt[operation="save"]').on("click" , () => {
        
            HVC.hvm.save()
        
        })
        $('.btn-opt[operation="import"]').on("click", async() => {

            $("body").append(`<input type="file" id="file" style="display: none;">`)

            $("#file").on("change", (e) => {

                const input = e.target as HTMLInputElement
                const file = input.files[0];
                const reader = new FileReader();
                
                reader.onload = (event) => {

                    const fileContent = event.target.result.toString();

                    if (RegExp("[^.ahv]").test(file.name)) {

                        HVC.editor.setScript(fileContent)

                        HVC.editor.rename(file.name)
                        
                    } else {

                        alert("Só é permitido o envio de scripts de formato .ahv")

                    }

                    $("#file").remove()

                };

                reader.readAsText(file);
            })

            $("#file").trigger("click");

        })

    }

    public static sleep(ms:number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}

new HVC()

export default HVC

setTimeout(() => {HVC.config.loadConfig(); HVC.feedback.init()}, 500)