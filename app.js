// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){

    let amigo = document.getElementById('amigo').value;

    if (!amigo == "") {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        actualizaAmigo();
    } else {
        alert("Por favor, inserte un nombre");
    }

}

function actualizaAmigo(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    

    amigos.forEach(texto =>{
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = texto;
        lista.appendChild(nuevoElemento);
    })
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
    } else {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "";

        let randomInt = Math.floor(Math.random() * amigos.length);
        let amigoGanador = amigos[randomInt];

        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = "El ganador es: " + amigoGanador;
        resultado.appendChild(nuevoElemento);


    }
}