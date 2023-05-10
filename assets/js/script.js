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
//#region 
const adminpeople = ["aathithya-j", "yaushing", "sasutski", "dedizzydoge", "samsungnotasmartfridge"]
let QkBaCSRxbYYZK49lXuK89aZTOPsnibSl13eMjKEchSzN0OTUBXAEeB = false
var d = new Date().getDay();
let ZxT5BTQjq4azC9lTdkm1QELo5ReUyPKhJxM1Nhxiv0elg = localStorage.getItem("mLRbgxL7bvnN6NDcfgresSzI5n0WKhVyFfwVPekFvcLD2wGh2G7mvhQC4ISH08StMf35FSYdoPTMVWdBEbqLhW");
let Ygw9mF2RVpfqZeFyB9IhVLiBe3c3QcJCwq0nEROHxjVpTejikUUPqttmbnr8Qyzzr1XYw1waHg7DoDrgg7OT77XXoiu18 = localStorage.getItem("LDdxEwu0GGXooMoJEyHEeOsNNLslTGC1mh5mRHUyZxsr2n1bkLUZCq5NHSHcyxMVhC3FVYsXQeBFdIJK4fpQfZZ1s0PMGkizyGWF");
var titles = [
    '5QLhoUsJdqabBIKwck5DOXue3A0bxwENIyvy0CghblGgGuHY8UDkL5cIYDxrn5oprfLAqoIbTu8jsxONVkJaCfBt1M9ZmQJKKdaoSX', 
    's6Y1a98MEhA85PefkjctUqSpL5enoA9nrfTzNHr', 
    'z7qiAr5AOEbuVYQnr1PfV0GkzLqsPvcuDi6AtQvhKfElX2HWaQXzkBXEEBXmzIB', 
    'X6K4upiBclETAPgavWmdiDunDp6bg9BWb0N0Erh0Pe3wroPqMemanSNaJCNKoNtnhq8r1w2fHObcY8hs8Qu3o', 
    'SseX2uLODGefjV0AoHwf8pgCcdDUkgY2gQQJYJ4HhKjJOCgD1DZuEZfn6VJCQk8r1I4fb6L', 
    'TLTliyIBiiNixrHDxeKxp4YvjKAbH8QgjLZUGdlWW3tdb7k', 
    '9hGbu699O4u9rMVAKCWajbIlqMEP09L4rLZGM6vSlWimlkttri34eaL2jtLaGsNdojfQ9xik2yBvmmOU4cQJJModzM4V9zz7b5Ec6b'];
//z7qiAr5AOEbuVYQnr1PfV0GkzLqsPvcuDi6AtQvhKfElX2HWaQXzkBXEEBXmzIB

QkBaCSRxbYYZK49lXuK89aZTOPsnibSl13eMjKEchSzN0OTUBXAEeB = false
    if (ZxT5BTQjq4azC9lTdkm1QELo5ReUyPKhJxM1Nhxiv0elg == null) {
        ZxT5BTQjq4azC9lTdkm1QELo5ReUyPKhJxM1Nhxiv0elg = ""
        Ygw9mF2RVpfqZeFyB9IhVLiBe3c3QcJCwq0nEROHxjVpTejikUUPqttmbnr8Qyzzr1XYw1waHg7DoDrgg7OT77XXoiu18 = ""
    } else if (gBwr5NQem3ZdDBOf8aoBpH6lIVAsw8(ZxT5BTQjq4azC9lTdkm1QELo5ReUyPKhJxM1Nhxiv0elg, Ygw9mF2RVpfqZeFyB9IhVLiBe3c3QcJCwq0nEROHxjVpTejikUUPqttmbnr8Qyzzr1XYw1waHg7DoDrgg7OT77XXoiu18)) {
        QkBaCSRxbYYZK49lXuK89aZTOPsnibSl13eMjKEchSzN0OTUBXAEeB = true
    }

window.onload=function(){
    document.getElementById("title").innerHTML = titles[d-1];
    document.getElementById("key").value = titles[d-1];
    }
        function copy() {
      var copyText = document.querySelector("#key"); 
      copyText.select(); document.execCommand("copy");
      alert("Copied!")
      open("index.html", "_self")
    }
    document.querySelector("#copy").addEventListener("click", copy);

function gBwr5NQem3ZdDBOf8aoBpH6lIVAsw8(username, userkey)  {
    if (userkey == titles[d-1] && adminpeople.includes(username)) {
        localStorage.setItem("mLRbgxL7bvnN6NDcfgresSzI5n0WKhVyFfwVPekFvcLD2wGh2G7mvhQC4ISH08StMf35FSYdoPTMVWdBEbqLhW", username);
        localStorage.setItem("LDdxEwu0GGXooMoJEyHEeOsNNLslTGC1mh5mRHUyZxsr2n1bkLUZCq5NHSHcyxMVhC3FVYsXQeBFdIJK4fpQfZZ1s0PMGkizyGWF", userkey);
        console.log("Admin access granted")
        return true
    } else {
        return false
    }
}

function Admin() {
    var mLRbgxL7bvnN6NDcfgresSzI5n0WKhVyFfwVPekFvcLD2wGh2G7mvhQC4ISH08StMf35FSYdoPTMVWdBEbqLhW = prompt("Name:")
    var LDdxEwu0GGXooMoJEyHEeOsNNLslTGC1mh5mRHUyZxsr2n1bkLUZCq5NHSHcyxMVhC3FVYsXQeBFdIJK4fpQfZZ1s0PMGkizyGWF = prompt("Key:")
    localStorage.setItem("mLRbgxL7bvnN6NDcfgresSzI5n0WKhVyFfwVPekFvcLD2wGh2G7mvhQC4ISH08StMf35FSYdoPTMVWdBEbqLhW", mLRbgxL7bvnN6NDcfgresSzI5n0WKhVyFfwVPekFvcLD2wGh2G7mvhQC4ISH08StMf35FSYdoPTMVWdBEbqLhW);
    localStorage.setItem("LDdxEwu0GGXooMoJEyHEeOsNNLslTGC1mh5mRHUyZxsr2n1bkLUZCq5NHSHcyxMVhC3FVYsXQeBFdIJK4fpQfZZ1s0PMGkizyGWF", LDdxEwu0GGXooMoJEyHEeOsNNLslTGC1mh5mRHUyZxsr2n1bkLUZCq5NHSHcyxMVhC3FVYsXQeBFdIJK4fpQfZZ1s0PMGkizyGWF);
    ZxT5BTQjq4azC9lTdkm1QELo5ReUyPKhJxM1Nhxiv0elg = mLRbgxL7bvnN6NDcfgresSzI5n0WKhVyFfwVPekFvcLD2wGh2G7mvhQC4ISH08StMf35FSYdoPTMVWdBEbqLhW
    Ygw9mF2RVpfqZeFyB9IhVLiBe3c3QcJCwq0nEROHxjVpTejikUUPqttmbnr8Qyzzr1XYw1waHg7DoDrgg7OT77XXoiu18 = LDdxEwu0GGXooMoJEyHEeOsNNLslTGC1mh5mRHUyZxsr2n1bkLUZCq5NHSHcyxMVhC3FVYsXQeBFdIJK4fpQfZZ1s0PMGkizyGWF
    if (gBwr5NQem3ZdDBOf8aoBpH6lIVAsw8(ZxT5BTQjq4azC9lTdkm1QELo5ReUyPKhJxM1Nhxiv0elg, Ygw9mF2RVpfqZeFyB9IhVLiBe3c3QcJCwq0nEROHxjVpTejikUUPqttmbnr8Qyzzr1XYw1waHg7DoDrgg7OT77XXoiu18)) {
        QkBaCSRxbYYZK49lXuK89aZTOPsnibSl13eMjKEchSzN0OTUBXAEeB = true
    }
}

function OpenError403(pagename) {
    if (QkBaCSRxbYYZK49lXuK89aZTOPsnibSl13eMjKEchSzN0OTUBXAEeB == false) {
        open("page-error-403.html", "_self")
    } else {
        open(pagename, "_self")
    }
}
//#endregion
