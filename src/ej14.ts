// 14. Type assertions
// Declara una variable de tipo any con un valor numérico y usa una aserción de tipo
// para tratarla como un string. Usa la propiedad “.length” en esta variable. 

// Declarar una variable de tipo any con un valor numérico
let variable: any = 12345;

// Usar una aserción de tipo para tratarla como un string
let stringValue = variable as string;

// Acceder a la propiedad .length
console.log("La longitut de la variable:", stringValue.length);
