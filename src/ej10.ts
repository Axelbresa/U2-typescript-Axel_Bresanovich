// 10. Herencia de clases
// Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional
// batteryLife (vida de la batería) de tipo número. Añade un método charge() que
// imprima un mensaje diciendo que el coche se está cargando.


class ElectricCar extends Car{
    private batteryLife: number; // Propiedad adicional

    constructor(make: string, batteryLife: number) {
        super(make); // Llamamos al constructor de la clase car
        this.batteryLife = batteryLife;
    }

    charge(){
        return "El coche se está cargando" + this.batteryLife
    }
    
}

