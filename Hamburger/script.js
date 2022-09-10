const button = document.getElementById("btn")
const navbar = document.getElementById("nav")

button.addEventListener("click",()=> {
    navbar.classList.toggle("active");
    button.classList.toggle("active");
})