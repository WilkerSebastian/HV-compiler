const pathname = window.location.pathname.split("/");

if(!localStorage.getItem("lexa") && pathname[pathname.length - 1] != "conteudo.html") {

    let url = window.location.href

    url = url.slice(0, url.lastIndexOf("/") + 1)

    url += "conteudo.html"

    const nome = window.location.href.split("/")

    window.location.href = url + "?content=" + nome[nome.length - 1].split(".")[0]

    localStorage.setItem("lexa", "true")

} else {

    localStorage.clear()

}