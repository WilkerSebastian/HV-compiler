if(!localStorage.getItem("lexa") && window.location.pathname.split("/")[3] != "conteudo.html") {

    let url = window.location.href

    url = url.slice(0, url.lastIndexOf("/") + 1)

    url += "conteudo.html"

    const nome = window.location.href.split("/")[5].split(".")[0]

    window.location.href = url + "?content=" + nome 

    localStorage.setItem("lexa", "true")

} else {

    localStorage.clear()

}