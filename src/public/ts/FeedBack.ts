import * as $ from "jquery"

export default class FeedBack {

    constructor () {

        $("#modal-feed").load("./layouts/feedback.html" )

    }

    public init() {

        $("body").append(`
            <button class="d-none" id="btn-feed" data-bs-toggle="modal" data-bs-target="#feed-modal"></button>
            `)

        const form = document.getElementById("form-feed") as HTMLFormElement

        form.addEventListener("submit", async(e) => {

            if (form.checkValidity()) {

                const conteudo = $("#conteudo").val()
                
                e.preventDefault()
                await fetch("https://fe2c-2804-d59-8d31-f100-bd87-7660-1161-60a6.ngrok-free.app/save", {
                    method: "POST",
                    body: JSON.stringify({ conteudo:conteudo }),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                $("#btn-close-feed").trigger("click")

            } else {

                e.preventDefault()
                e.stopPropagation()

            }
            
            form.classList.add('was-validated')

        }, false)

    }

    public mostrar() {

        if(!localStorage.getItem("feedback")) {

            setTimeout(() => {

                $("#btn-feed").trigger("click")

            }, 10000)

        }

    }

}