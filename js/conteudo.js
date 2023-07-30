document.addEventListener('DOMContentLoaded', () => {

    let conteudo = window.location.search.split("=")[1]

    $(".content").load(`./${conteudo}.html`)

    $("header").load("../layouts/header.html")

    $("footer").load("../layouts/footer.html")

    $(".nav-content").load("../layouts/scroll.html")

})