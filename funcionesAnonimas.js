// Ya sabemos trabajar con funciones, por ejemplo,
// creamos una función para sumar dos números, esta función recibirá los números que sumará y retornará la suma

function suma(a, b) {
    return a + b
}
// Pero además de la forma tradicional de declarar funciones podemos crear funciones anónimas
// estas funciones no tienen nombre y lo más común es que sean asignadas a una variable de la siguiente manera:

const resta = function (a, b) {
    return a - b;
}


// ahora la forma de llamar a la función anónima es utilizando la variable a la que fue asignada, de la siguiente manera
// const resultado = resta(2, 3)
// console.log(resultado)

/**
 * 
 * Callbacks
 * 
 */

//  También sabemos que una función puede recibir parámetros, hasta ahora solo hemos pasado variables como pargumentos, pero también podemos pasar funciones
// cuando pasamos una función como argumento, esta se llama una función callback, o simplemente un callback, por ejemplo:


// function firstSum(a, b) {
//     return a  + b
// }

// function sum(a, b) {
//     return a + b(4, 5)
// }

// // Aquí el callback es firstSum
// const result = sum(2, firstSum)
// console.log(result)

/**
 * 
 * Esto es exactamente lo mismo a lo anterior pero pasamos directamente la función
 * 
 */

function sum(a, b) {
    return a + b()
}

// El callback es una función anónima
const result = sum(2, function() {
    return 3 + 4
})

// calback functions
// https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

// console.log(result)




// Map
// https://www.w3schools.com/jsref/jsref_map.asp
// https://www.w3schools.com/jsref/jsref_filter.asp
// https://www.w3schools.com/jsref/jsref_find.asp