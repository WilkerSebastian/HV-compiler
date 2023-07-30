const conteudos = [

    ["intro", "Introdução"]

]

conteudos.forEach(e => {

    if (window.location.search.split("=")[1] == e[0]) {

        $(".bar").append(`<li class="bar-link active" href="./${e[0]}.html">${e[1]}</li>`)

    } else {

        $(".bar").append(`<li class="bar-link" href="./${e[0]}.html">${e[1]}</li>`)

    }

})

$(".bar-link").on("click", (e) => {

    window.location.href = e.target.getAttribute("href")

})