'use strict';

// Escribir una función que reciba como parámetro una frase, separar por palabras y devolver en un array 
// las palabras que tengan mas de 3 letras.

function wordsLong(phrase) {
    let words = phrase.split(',');

    let wordsLong = words.filter(words => words.length > 0);

    return wordsLong;
}
let phrase = "Esta es la clase de Metodologia";
let result = wordsLong(phrase);
alert(result); 