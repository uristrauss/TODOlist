const ArrayTareas = ["Hacer el TP 4", "Repasar los cocneptos que vimos en EFSI sobre Karl Marx", "Asistir a las clases de Stanca", "Leer lo que hicimos en la clase de agronomia cientifica cardiaca", "Copiarme en la prueba de matematica"];

ArrayTareas.map((element) => {
let contenido = document.createElement("li");
contenido.innerHTML = element;
document.getElementById ("ESCRIBIR").appendChild(contenido)
});




