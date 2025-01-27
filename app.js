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
  //  mostrarAmigos();
}