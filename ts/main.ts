const hvm = new HVM()

$("#run").on("click", async() => {

    bloqueia(true)

    const exit = await hvm.run() 

    if (!isNaN(exit)) {
        
        bloqueia(false)

        return

    }

})
$("#stop").on("click", () => {

    console.log("stop");
    

    terminal.controle = false

    hvm.runner = false

    setTimeout(() => terminal.controle = true, 10)

})
$("#debug").on("click", async() => {

    bloqueia(true)

    const exit = await hvm.run(true) 

    if (!isNaN(exit)) {
        
        bloqueia(false)

        return

    }

})
$("#save").on("click", () => {

    hvm.save()

})

function bloqueia(ativo:boolean) {

    if (!ativo) {

        $("#cstop").css("display", "none")
        $("#run").css("display", "block")
        $("#debug").removeAttr("disabled")         
        
        return

    }

    $("#cstop").css("display", "block")
    $("#run").css("display", "none");
    $("#debug").attr("disabled", "disabled")

}