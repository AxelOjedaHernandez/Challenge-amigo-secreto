let listaAmigos = [];
let amigo;

const listaAmigosSecretos = document.getElementById("listaAmigos");
const listaAmigoSorteado = document.getElementById("resultado");

function limpiarInput() {
    document.getElementById("amigo").value = "";
}

function obtenerAmigo() {
    amigo = document.getElementById("amigo").value;

    if(amigo === "") {
        alert("Por favor, ingresa un nombre de amigo valido.");
        limpiarInput();
        return;
    }
    if(amigo.length < 3 || amigo.length > 20) {
        alert("El nombre debe tener entre 3 y 20 caracteres.");
        limpiarInput();
        return;
    }
    limpiarInput();
    return amigo;
    
}

function agregarAmigo() {
    const listaAmigosElemento = document.createElement("li");

    if(obtenerAmigo() === undefined) {
        return;
    } 
    
    listaAmigos.push(amigo);

    listaAmigosElemento.textContent = amigo;
    listaAmigosSecretos.appendChild(listaAmigosElemento);

    document.querySelector(".button-draw").disabled = false;
}

function sortearAmigo() {
    const apuntador = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[apuntador];
    const amigoSorteadoElemento = document.createElement("li");

    listaAmigos = []

    if(listaAmigoSorteado.children.length > 0) {
        listaAmigoSorteado.innerHTML = "";
    }

    listaAmigosSecretos.innerHTML = "";

    amigoSorteadoElemento.textContent = amigoSorteado;
    listaAmigoSorteado.appendChild(amigoSorteadoElemento);

    document.querySelector(".button-draw").disabled = true;
}