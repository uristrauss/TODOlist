var MisTareas = [];

function AgregarTareas(e) {
    e.preventDefault();
    let TareaNueva = document.getElementById("INPUT").value; //Agarramos el valor del INPUT de la nueva tarea
                const Tarea = new Object(); //Creamos un array de objetos
                Tarea.Texto = TareaNueva;
                Tarea.Creacion = e.timeStamp;
                Tarea.Fin = -1;
                Tarea.Chequeado = false;
        
        //Crear un nuevo elemento de lista
        const TODO = document.createElement("li");
                TODO.className = "TODO"; //CONEXION CON CSS

        //Crear un nuevo elemento de verificacion
        let checkbox = document.createElement("input");
                checkbox.type="checkbox"; // le decimos que el input sea de tipo checkbox
                checkbox.className = "checkbox"; //CONEXION CON CSS
                checkbox.setAttribute("onclick", "Tachar(event)") // no entendemos

        
                
        TODO.appendChild(checkbox)
         texto= document.createElement("label")
        texto.innerText= TareaNueva
        TODO.appendChild(texto)              
        document.getElementById("ESCRIBIR").appendChild(TODO);
        MisTareas.push(Tarea);
        //console.log("2")
        
    //}

}

function Tachar(e) {
    let check = document.getElementsByClassName("checkbox");
    //recorro el array de checks
    for (let i = 0; i < check.length; i++) {
       if(check[i].checked){
           let ElementoPadre = check[i].parentNode; //agarramos el elemento padre
           let texto = ElementoPadre.querySelector('label'); // buscamos el elemento de texto
           if (texto) {
               texto.classList.add("tachado"); // agregamos la clase de tachado
               // agarro el texto del padre
               let textoContent = texto.textContent;
               //recorro el array de tareas
               for (let j = 0; j < MisTareas.length; j++) {
                   if (textoContent == MisTareas[j].Texto) {
                       MisTareas[j].Fin = e.timeStamp;
                       //digo que se completo
                       MisTareas[j].Chequeado = true;
                   }
               }
           }
       } else {
           let ElementoPadre = check[i].parentNode;
           let texto = ElementoPadre.querySelector('label');
           if (texto) {
               texto.classList.remove("tachado"); //saco el tachado
               let textoContent = texto.textContent;
               //recorro el array
               for (let j = 0; j < MisTareas.length; j++) {
                   if (textoContent == MisTareas[j].Texto) {
                       MisTareas[j].Fin = -1;
                       //agrego el completado
                       MisTareas[j].Chequeado = false;
                   }
               }
           }
       }
    }
 }
 

    function MostrarTareaMasRapida() {
        let tareaMasRapida;
        let tiempoMasRapido = 9999999999999999999;
        for (let i = 0; i < MisTareas.length; i++) {
          if (MisTareas[i].Chequeado) {
            var tiempoTarea = MisTareas[i].Fin - MisTareas[i].Creacion;//la antiguedad contra el momento en que paramos al tiempo
            if (tiempoTarea < tiempoMasRapido) {
              tiempoMasRapido = tiempoTarea; //toma el valor del mas rapiudo
              tareaMasRapida = MisTareas[i].Texto; //toma el valor del mas rapido
            }
          }
        }
        const elementoTareaMasRapida = document.getElementById('TareaMasRapida');
        if (tareaMasRapida != null) {
            console.log(tareaMasRapida);
            tiempoMasRapido = tiempoMasRapido/1000;//paso de milisegundos a segundos
          elementoTareaMasRapida.innerText = `La tarea más rápida fue "${tareaMasRapida}" que se completó en ${tiempoMasRapido} segundos.`;
        } else {
          elementoTareaMasRapida.innerText = "No hay tareas completadas.";
        }
      }
      



