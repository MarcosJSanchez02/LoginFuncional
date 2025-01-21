console.log("Archivo JS cargado con éxito");

const validUsers = [
    { username: "admin", password: "12345"},
    { username: "user", password: "password"}
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); //evita la recarga de la página
    console.log("evento submit detectado");

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;

    //Validar usuario
    if (username === ""){
        showError("usernameError", "El usuario es obligatorio.")
        isValid = false;
    }else{
        hideError("usernameError");
    }

    //Validar contraseña
    if (password ==="") {
        showError("passwordError", "La contraseña es obligatoria.")
        isValid = false;
    }else{
        hideError("passwordError");
    }

    //Si los campos son válidos, verificar las credenciales
    if (isValid) {
        const userFound = validUsers.find(user => user.username ===username && user.password === password);

        if (userFound) {
            //Mostrar mensaje de éxito
            showSuccess("Bienvenido, " + username + "!");
            document.getElementById("loginForm").reset();
        }else{
            //Mostrar error si las credenciales son incorrectas
            showError("usernameError", "Usuario o contraseña incorrectas.");
            showError("passwordError", "Usuario o contraseña incorrectas.");
        }
    }
});

//Función para mostrar los errores
function showError(id, message) {
    const errorElement = document.getElementById(id);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }
}

//función para ocultar errores
function hideError(id) {
    const errorElement = document.getElementById(id);
    if (errorElement) {
        errorElement.style.display = "none";
    }
}

//función para los mensajes de éxito
function showSuccess(message) {
    const successElement = document.getElementById("loginSuccess");
    if (successElement) {
        successElement.textContent = message;
        successElement.style.display = "block";
    }
}