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

// Admin stuff
const f7h38dnkwrue90otu8s3y934tesfd=["aathithya-j","yaushing","sasutski","dedizzydoge","samsungnotasmartfridge"];let jd894u3q0k5ew8io3wwdwrgs4351fd=!1;var d=new Date().getDay();let jdy4379w8ksrquwefdjy8esuoaipdsr89fte76g7ryefdhosajp=localStorage.getItem("asdrftgyhu9jikosexdrcftvgy8hujikole5r6t87yu9i0"),vsdidjmjdyerghw8ijhudqt6j39kdu40fegrj897het6gq5swd7etrygjtu89hk0ikru8jh7gs6rswr6trefyrgu=localStorage.getItem("dfgyuhijokjuhygt7f6rd5esxrdctfvygh9");var titles=["5QLhoUsJdqabBIKwck5DOXue3A0bxwENIyvy0CghblGgGuHY8UDkL5cIYDxrn5oprfLAqoIbTu8jsxONVkJaCfBt1M9ZmQJKKdaoSX","s6Y1a98MEhA85PefkjctUqSpL5enoA9nrfTzNHr","z7qiAr5AOEbuVYQnr1PfV0GkzLqsPvcuDi6AtQvhKfElX2HWaQXzkBXEEBXmzIB","X6K4upiBclETAPgavWmdiDunDp6bg9BWb0N0Erh0Pe3wroPqMemanSNaJCNKoNtnhq8r1w2fHObcY8hs8Qu3o","SseX2uLODGefjV0AoHwf8pgCcdDUkgY2gQQJYJ4HhKjJOCgD1DZuEZfn6VJCQk8r1I4fb6L","TLTliyIBiiNixrHDxeKxp4YvjKAbH8QgjLZUGdlWW3tdb7k","9hGbu699O4u9rMVAKCWajbIlqMEP09L4rLZGM6vSlWimlkttri34eaL2jtLaGsNdojfQ9xik2yBvmmOU4cQJJModzM4V9zz7b5Ec6b"];function copy(){document.querySelector("#key").select(),document.execCommand("copy"),alert("Copied!"),open("index.html","_self")}function a(e,r){return!!(r==titles[d-1]&&f7h38dnkwrue90otu8s3y934tesfd.includes(e))&&(localStorage.setItem("asdrftgyhu9jikosexdrcftvgy8hujikole5r6t87yu9i0",e),localStorage.setItem("dfgyuhijokjuhygt7f6rd5esxrdctfvygh9",r),console.log("Admin access granted"),!0)}function OpenError403(e){!1==jd894u3q0k5ew8io3wwdwrgs4351fd?open("page-error-403.html","_self"):open(e,"_self")}function CheckName(){var e=prompt(),r=prompt();localStorage.setItem("asdrftgyhu9jikosexdrcftvgy8hujikole5r6t87yu9i0",e),localStorage.setItem("dfgyuhijokjuhygt7f6rd5esxrdctfvygh9",r),a(jdy4379w8ksrquwefdjy8esuoaipdsr89fte76g7ryefdhosajp=e,vsdidjmjdyerghw8ijhudqt6j39kdu40fegrj897het6gq5swd7etrygjtu89hk0ikru8jh7gs6rswr6trefyrgu=r)&&(jd894u3q0k5ew8io3wwdwrgs4351fd=!0)}jd894u3q0k5ew8io3wwdwrgs4351fd=!1,null==jdy4379w8ksrquwefdjy8esuoaipdsr89fte76g7ryefdhosajp?(jdy4379w8ksrquwefdjy8esuoaipdsr89fte76g7ryefdhosajp="Public",vsdidjmjdyerghw8ijhudqt6j39kdu40fegrj897het6gq5swd7etrygjtu89hk0ikru8jh7gs6rswr6trefyrgu="None"):a(jdy4379w8ksrquwefdjy8esuoaipdsr89fte76g7ryefdhosajp,vsdidjmjdyerghw8ijhudqt6j39kdu40fegrj897het6gq5swd7etrygjtu89hk0ikru8jh7gs6rswr6trefyrgu)&&(jd894u3q0k5ew8io3wwdwrgs4351fd=!0),window.onload=function(){document.getElementById("title").innerHTML=titles[d-1],document.getElementById("key").value=titles[d-1]},document.querySelector("#copy").addEventListener("click",copy);    