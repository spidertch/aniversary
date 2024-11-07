// Validación del código secreto
function validateCode() {
    const code = document.getElementById("secretCode").value;
    const secretCode = "1234";  // Cambia "1234" por el código secreto que desees

    if (code === secretCode) {
        window.location.href = "secret.html";
    } else {
        alert("Código incorrecto. Inténtalo de nuevo.");
    }
}

// Función para girar la carta
function flipCard() {
    document.querySelector(".card").classList.toggle("flipped");
}
