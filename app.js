const inputAmigo = document.getElementById('amigo'); 
const listaAmigos = document.getElementById('listaAmigos'); 
const resultado = document.getElementById('resultado'); 

let amigos = []; // Array para almacenar los nombres de los amigos



function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); 


    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return; 
    }


    amigos.push(nombre);
    actualizarLista();


    inputAmigo.value = '';
}


function actualizarLista() {
    listaAmigos.innerHTML = ''; 


    amigos.forEach((nombre) => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay nombres en la lista.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    limpiarLista();
}

function limpiarLista() {
    amigos = []; 
    actualizarLista(); 
    resultado.innerHTML = ''; 
}