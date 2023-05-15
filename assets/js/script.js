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
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
// James don't touch this!!!
//#region Admin
const adminpeople = ["aathithya-j", "yaushing", "sasutski", "dedizzydoge", "samsungnotasmartfridge"]
let admin = false
var d = new Date().getDay();
let git_config_user_name = localStorage.getItem("name");
let git_config_user_key = localStorage.getItem("key");
var titles = [
    '5QLhoUsJdqabBIKwck5DOXue3A0bxwENIyvy0CghblGgGuHY8UDkL5cIYDxrn5oprfLAqoIbTu8jsxONVkJaCfBt1M9ZmQJKKdaoSX', 
    's6Y1a98MEhA85PefkjctUqSpL5enoA9nrfTzNHr', 
    'z7qiAr5AOEbuVYQnr1PfV0GkzLqsPvcuDi6AtQvhKfElX2HWaQXzkBXEEBXmzIB', 
    'X6K4upiBclETAPgavWmdiDunDp6bg9BWb0N0Erh0Pe3wroPqMemanSNaJCNKoNtnhq8r1w2fHObcY8hs8Qu3o', 
    'SseX2uLODGefjV0AoHwf8pgCcdDUkgY2gQQJYJ4HhKjJOCgD1DZuEZfn6VJCQk8r1I4fb6L', 
    'TLTliyIBiiNixrHDxeKxp4YvjKAbH8QgjLZUGdlWW3tdb7k', 
    '9hGbu699O4u9rMVAKCWajbIlqMEP09L4rLZGM6vSlWimlkttri34eaL2jtLaGsNdojfQ9xik2yBvmmOU4cQJJModzM4V9zz7b5Ec6b'];
//z7qiAr5AOEbuVYQnr1PfV0GkzLqsPvcuDi6AtQvhKfElX2HWaQXzkBXEEBXmzIB

admin = false
    if (git_config_user_name == null) {
        git_config_user_name = "Public"
        git_config_user_key = "None"
    } else if (check_admin(git_config_user_name, git_config_user_key)) {
        admin = true
    }

window.onload=function(){
    document.getElementById("title").innerHTML = titles[d];
    document.getElementById("key").value = titles[d];
    }
        function copy() {
      var copyText = document.querySelector("#key"); 
      copyText.select(); document.execCommand("copy");
      alert("Copied!")
      open("index.html", "_self")
    }
    document.querySelector("#copy").addEventListener("click", copy);

function check_admin(username, userkey)  {
    if (userkey == titles[d] && adminpeople.includes(username)) {
        localStorage.setItem("name", username);
        localStorage.setItem("key", userkey);
        console.log("Admin access granted")
        return true
    } else {
        return false
    }
}

function OpenError403(pagename) {
    if (admin == false) {
        open("page-error-403.html", "_self")
    } else {
        open(pagename, "_self")
    }
}

function Admin() {
    var name = prompt("Name:")
    var key = prompt("Key:")
    localStorage.setItem("name", name);
    localStorage.setItem("key", key);
    git_config_user_name = name
    git_config_user_key = key
    if (check_admin(git_config_user_name, git_config_user_key)) {
        admin = true
    }
}
//#endregion
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
// From here you can touch
