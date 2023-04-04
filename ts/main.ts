const hvm = new HVM()

$("#run").on("click", async() => {

    await hvm.run()

})
$("#debug").on("click", async() => {

    await hvm.run(true)

})
$("#save").on("click", () => {

    hvm.save()

})