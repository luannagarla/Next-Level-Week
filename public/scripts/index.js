const buttonSearch = document.querySelector("#page-home main a")
const close = document.querySelector("#modal .header a")

const modal = document.querySelector("#modal")


buttonSearch.addEventListener ("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", ()=> {
    modal.classList.add("hide")
})