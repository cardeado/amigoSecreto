let amigos = [];

function adicionarAmigo () {

    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;

    if (nomeAmigo === "") {
        alert ("Por favor, insira um nome.");
        return;
    } 

    amigos.push(nomeAmigo);

    atualizarLista();

    inputAmigo.value = "";
}

function atualizarLista() {

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sorteio.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}