// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarNombre(nombre){
    if(nombre!==""){
        amigos.push(nombre);
    }else{
        alert("Por favor, inserte un nombre.")
    }
    
}
// boton agregar amigo
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    agregarNombre(nombre);
    // limpiar campo
    document.getElementById("amigo").value = "";
    mostrarAmigos();
}
// muestra y actualiza la lista de amigos en el html
function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos")
    let resultado = document.getElementById("resultado");
    if(amigos.length>0){
        lista.innerHTML = "";
        resultado.innerHTML = "";
        for (let index = 0; index < amigos.length; index++) {
            const element = amigos[index];
            let li = document.createElement("li");
            li.textContent = element;
            lista.appendChild(li);
        }
        }
}
// boton sortear amigo
function sortearAmigo(){
    if(amigos.length>0){
        let numeroGenerado =  Math.floor(Math.random()*amigos.length);
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "El amigo secreto sorteado es: "+ amigos[numeroGenerado];
    }

    
}