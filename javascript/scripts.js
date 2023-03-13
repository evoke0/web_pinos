const hamburguesa = document.getElementById("hamburguesa");
const navBar = document.getElementById("nav-bar");
const asociarse = document.getElementById("asociarse");

hamburguesa.addEventListener("click", () => {
    navBar.classList.toggle("active");
})

asociarse.addEventListener("click", () => {
    alert("Por favor, siga las instrucciones descritas en el ANEXO para rellenar el formulario.\n\nUna vez completado, envíelo mediante correo electrónico a la dirección indicada en el margen superior derecho o entréguelo en la sede.");
})