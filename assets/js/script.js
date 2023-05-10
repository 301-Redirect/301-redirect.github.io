const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("nav ul li a");
const navlinks = document.querySelectorAll("nav ul li");
document.addEventListener("mousedown", () => {
    cursor.classList.add("click");
})
document.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
})

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.clientX + 4;
    let topPosition = e.clientY + 4;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
})

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})

// Animation

navlinks.forEach((li, i) => {
    li.style.animationDelay = 0 + i * 140 + "ms";
})
addEventListener("load", (event) => {
    admin = false
    console.log("admin = false")
});

function OpenError403(pagename) {
    if (admin == false) {
        open("page-error-403.html", "_self")
    } else {
        open(pagename, "_self")
    }
}