let index = () => {
    window.open("/", "_self")
}

window.addEventListener("DOMContentLoaded", (event) => {
    console.log(event)
    console.error("bye!")
    index()
});