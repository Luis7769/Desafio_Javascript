let resultado = document.querySelector (".resultado");
let formulario = document.getElementById ("formulario");
let nombre = document.getElementById ("nombre");
let asunto = document.getElementById ("asunto");
let mensaje = document.getElementById ("mensaje");
let errorMensaje = document.querySelector (".errorMensaje");
let errorAsunto = document.querySelector (".errorAsunto");
let errorNombre = document.querySelector (".errorNombre");


formulario.addEventListener ("submit", enviarFormulario);

let letras = /^[A-Za-z\s]+$/;

function enviarFormulario (event) {
    event.preventDefault();
    if (nombre.value !== "" && asunto.value !== "" && mensaje.value !== "" && letras.test (nombre.value) && letras.test (asunto.value)) {
        resultado.innerHTML = "Mensaje enviado con éxito !!!";
    } else {
        errorNombre.innerHTML = "El nombre es requerido"
        errorAsunto.innerHTML = "El asunto es requerido"
        errorMensaje.innerHTML = "El mensaje es requerido"
    }

}
