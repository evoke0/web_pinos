const hamburguesa = document.getElementById("hamburguesa");
const navBar = document.getElementById("nav-bar");

hamburguesa.addEventListener("click", () => {
    navBar.classList.toggle("active");
})