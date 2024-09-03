// 15. Genéricos (básico)
// Escribe una función genérica identity que tome un argumento de tipo T y devuelva
// el mismo valor. Usa esta función con diferentes tipos de datos.

function identity<T>(arg: T): T {
    return arg;
}

const numberResult = identity(123);           
const stringResult = identity("Hello World");
const booleanResult = identity(true);         

console.log(numberResult);  
console.log(stringResult); 
console.log(booleanResult); 
