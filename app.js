// Arreglo donde se almacenan los nombres de los amigos ingresados
let listaAmigos = [];

// Variable temporal para guardar el nombre del amigo actual
let amigo;

// Referencia al elemento <ul> donde se mostrarán los amigos agregados
const listaAmigosSecretos = document.getElementById("listaAmigos");

// Referencia al elemento <ul> donde se mostrará el amigo sorteado
const listaAmigoSorteado = document.getElementById("resultado");

/**
 * Limpia el campo de entrada del nombre del amigo
 */
function limpiarInput() {
    document.getElementById("amigo").value = "";
}

/**
 * Obtiene el nombre ingresado en el input, valida que sea correcto,
 * y si lo es, lo asigna a la variable `amigo`.
 * Devuelve el nombre si es válido, de lo contrario muestra una alerta y termina.
 */
function obtenerAmigo() {
    amigo = document.getElementById("amigo").value;

    // Validación: campo vacío
    if (amigo === "") {
        alert("Por favor, ingresa un nombre de amigo válido.");
        limpiarInput();
        return;
    }

    // Validación: longitud entre 3 y 20 caracteres
    if (amigo.length < 3 || amigo.length > 20) {
        alert("El nombre debe tener entre 3 y 20 caracteres.");
        limpiarInput();
        return;
    }

    // Si pasa las validaciones, limpia el input y retorna el nombre
    limpiarInput();
    return amigo;
}

/**
 * Agrega el amigo ingresado a la lista visual y al arreglo interno.
 * Habilita el botón de sorteo si al menos hay un nombre en la lista.
 */
function agregarAmigo() {
    const listaAmigosElemento = document.createElement("li"); // crea un nuevo <li>

    // Si no se obtuvo un nombre válido, se sale de la función
    if (obtenerAmigo() === undefined) {
        return;
    }

    // Agrega el nombre al arreglo
    listaAmigos.push(amigo);

    // Muestra el nombre en la lista HTML
    listaAmigosElemento.textContent = amigo;
    listaAmigosSecretos.appendChild(listaAmigosElemento);

    // Habilita el botón de sorteo
    document.querySelector(".button-draw").disabled = false;
}

/**
 * Selecciona un amigo aleatorio de la lista y lo muestra.
 * Limpia la lista visual de amigos ingresados y desactiva el botón de sorteo.
 */
function sortearAmigo() {
    // Genera un índice aleatorio dentro del rango de la lista
    const apuntador = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[apuntador];
    const amigoSorteadoElemento = document.createElement("li");

    // Vacía el arreglo para no permitir múltiples sorteos
    listaAmigos = [];

    // Si ya hay un resultado anterior, lo elimina
    if (listaAmigoSorteado.children.length > 0) {
        listaAmigoSorteado.innerHTML = "";
    }

    // Limpia también la lista de amigos agregados
    listaAmigosSecretos.innerHTML = "";

    // Muestra el amigo sorteado en pantalla
    amigoSorteadoElemento.textContent = amigoSorteado;
    listaAmigoSorteado.appendChild(amigoSorteadoElemento);

    // Desactiva el botón de sorteo para evitar más sorteos sin reiniciar
    document.querySelector(".button-draw").disabled = true;
}
