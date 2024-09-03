//  12. Tipos literales
// Crea una variable direction que solo pueda tener uno de los siguientes valores: "up", "down", "left", "right".

type Direction = "up" | "down" | "left" | "right";

let direction: Direction;

direction = "up"; // Esto es válido

console.log("The direction is: " + direction);
