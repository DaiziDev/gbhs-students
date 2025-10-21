const menu = document.querySelector("#menu");
const toggle = document.querySelector(".fa-bars");
const nav = document.querySelector(".small-screen")
const darkmood = document.querySelector(".dark-mood")
const moon = document.querySelector(".fa-moon")
const html = document.querySelector('html')

menu.addEventListener("click", function() {
    if(toggle.classList.contains("fa-bars")){
        toggle.classList.remove("fa-bars")
        toggle.classList.add("fa-xmark");
        nav.classList.remove("hidden")
        nav.classList.add("nav-animation")
    }else{
        toggle.classList.remove("fa-xmark");
        toggle.classList.add("fa-bars")
        nav.classList.add ("hidden")
        nav.classList.remove("nav-animation")
    }
})
darkmood.addEventListener("click", function() {
    if(moon.classList.contains("fa-moon")){
        moon.classList.remove("fa-moon");
        moon.classList.add("fa-sun")
        html.classList.add("dark-mode")
    }
    else{
        moon.classList.remove("fa-sun")
        moon.classList.add("fa-moon")
        html.classList.remove("dark-mode")
    }
})
