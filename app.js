// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
let nombresArray=[];


//una funcion para agregar al array y otro que haga el sorteo aleatorio
 function agregarAmigo() {
    let nombreUsuario=document.getElementById('amigo').value.trim();

    if (nombreUsuario === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombresArray.push(nombreUsuario);
    //agregar a la listaAmigos y que se imprima
    // Crear un nuevo elemento <li> y agregar el texto
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombreUsuario;
    document.getElementById("listaAmigos").appendChild(nuevoElemento);
    document.getElementById('amigo').value = "";
 };

 function sortearAmigo() {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    let posicionNombre= Math.floor(Math.random()*nombresArray.length);
   
    // Crear un nuevo elemento <li> y agregar el texto
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombresArray[posicionNombre];

    listaResultado.appendChild(nuevoElemento);
    //que se actualize cuando se haga nuevao click
    
 }