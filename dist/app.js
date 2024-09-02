"use strict";
// Definir la clase Persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Método para obtener el nombre
    obtenerNombre() {
        return this.nombre;
    }
    obtenerEdad() {
        return this.edad;
    }
}
// Crear una instancia de la clase Persona
let persona = new Persona("Axel", 18);
// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}
// Usar la instancia de Persona y la función sumar
console.log(persona.obtenerNombre(), persona.obtenerEdad(), "Resultado de la suma ", sumar(12, 13));
