//  9. Clase con propiedades privadas
// Modifica la clase Car para que la propiedad make sea privada. Añade un método
// getMake() que devuelva el valor de make. 


class Car_3 {
    private make: string; // Propiedad privada

    constructor(make: string) {
        this.make = make;
    }

    drive(): void {
        console.log("Driving a " + this.make);
    }

    getMake(): string {
        return this.make;
    }
}

// Crear una instancia de Car con una marca
let coche_2 = new Car_3("Toyota");

// Llamar al método drive()
coche_2.drive();

// Obtener el valor de make utilizando getMake()
console.log("Car make is: " + coche_2.getMake());
