'use strict';

//  Escribir una función que reciba como parámetro una frase. Separar por palabras y devolver el numero 
// de palabras que tiene la frase:

function words(phrase) {
    let words = phrase.split(" ");
    return words.length;
}

let phrase = 'La programación web es fundamental para el progreso';

let numberWords = words(phrase);
alert("Número de palabras: " + numberWords); 