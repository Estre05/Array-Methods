'Use strict';

// Escribir una función que reciba como parámetros un array de nombres y un nombre a buscar, muestre en 
// pantalla si el nombre esta en lista o no.
function nameStudents(name, name2) {
    if (name.includes(name2)) {
        alert("Si se encuentra");
    } else {
        alert("No se encuentra");
    }
}

let students = ["juan", "jose", "pedro", "maria", "alejandra"];

nameStudents(students, "pedro"); 
nameStudents(students, "lucas"); 
