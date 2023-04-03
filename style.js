//var Agregar = document.getElementById("TODO").value;
//var MisTareas = [];
//MisTareas.push(document.getElementById("TODO").value);
//
//let lista = document.createElement("li");
//document.getElementById ("TODO").appendChild(lista)
//
//let ingreso = document.createElement("checkbox");
//document.getElementById (ingreso).appendChild(lista)
//
//
//   // var input = document.createElement("input");
//    //input.type = "checkbox";
//
//console.log(list);


var MisTareas = [];

function AgregarTareas() {
    var TareasNueva = document.getElementById("INPUT").value; //Agarramos el valor del INPUT de la nueva tarea
    MisTareas.push(TareasNueva); //Agregamos la tarea al array de tareas
    var nuevaLista = document.createElement("checkbox"); // Creamos elemento de tipo lista
    nuevaLista.textContent = TareasNueva; // El elemento nuevaLista adquiere el valor de la nueva tarea
    document.getElementById("ListaTareas").appendChild(nuevaLista) //Se lo pasamos a la lista del INDEX
    document.getElementById(nuevaLista).value = null; //Vaciamos el elemento de tipo lista para dar espacio al siguiente

}