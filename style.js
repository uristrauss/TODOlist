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

function AgregarTareas(e) {
    e.preventDefault();
    var TareaNueva = document.getElementById("INPUT").value; //Agarramos el valor del INPUT de la nueva tarea
    if (document.getElementById("INPUT").value == "")
    {
        alert("Debe ingresar una tarea");
    }
    else
    {
        MisTareas.push(TareaNueva);
        document.getElementById("ESCRIBIR").innerHTML = "";
        MisTareas.map((x) => {
            var Contenido = document.createElement("li");
            var checkbox = document.createElement("input");
            checkbox.type="checkbox";
            Contenido.appendChild(checkbox)
            checkbox.classList.add("checkbox")
            Contenido,innerHTML += x;
            document.getElementById("ESCRIBIR").appendChild(Contenido);
            checkbox.onclick = function()
            
          });
    }


    //MisTareas.push(TareasNueva); //Agregamos la tarea al array de tareas
    //MisTareas.map()
    //var Padre = document.createElement("li");
    //var nuevaLista = document.createElement("input"); // Creamos elemento de tipo lista
    //nuevaLista.type="checkbox";
   //// nuevaLista.textContent = TareasNueva; // El elemento nuevaLista adquiere el valor de la nueva tarea
    //Padre.appendChild(nuevaLista);
    //parrafo = document.createElement("p");
    //parrafo.innertext = TareasNueva;
    //Padre.appendChild(parrafo);
    //document.getElementById("ListaTareas").appendChild(nuevaLista) //Se lo pasamos a la lista del INDEX
    ////document.getElementById(nuevaLista).value == " "; //Vaciamos el elemento de tipo lista para dar espacio al siguiente

}



