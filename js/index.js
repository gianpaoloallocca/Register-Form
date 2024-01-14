var form = document.getElementById("register-form");

form.addEventListener("submit", function (event) {
    var dataNascita = document.getElementById("data_nascita");

    // ottieni il valore della data di nascita dall'input
    var dataNascita = new Date(document.getElementById("dataNascita").value);

    // controlla se la data di nascita è valida
    if (
        isNaN(dataNascita) ||
        dataNascita.getFullYear() < 1900 ||
        dataNascita.getFullYear() > new Date().getFullYear() ||
        dataNascita.getMonth() > new Date().getMonth() ||
        (dataNascita.getMonth() == new Date().getMonth() && dataNascita.getDate() > new Date().getDate())
    ) {
        alert("Inserire una data di nascita valida.");
        document.getElementById("dataNascita").value = "";

        // Impedisce di inviare il form di default
        event.preventDefault();
    }

    var emailInput = document.getElementById("email");

    // Definisci il pattern dell'email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se l'email inserita corrisponde al pattern definito
    if (!emailPattern.test(emailInput.value)) {
        // Se l'email non corrisponde al pattern, mostra un messaggio di errore
        emailInput.setCustomValidity("Inserire un indirizzo email valido.");
        event.preventDefault();
    } else {
        // Se l'email corrisponde al pattern, rimuovi il messaggio di errore
        emailInput.setCustomValidity("");
    }

    window.location.href = "index.html";
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("pass");
    var icon = document.getElementById("password-icon");
    if (passwordInput) {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.textContent = "visibility";
        } else {
            passwordInput.type = "password";
            icon.textContent = "visibility_off";
        }
    }
}
