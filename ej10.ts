// 10. Herencia de clases
// Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional
// batteryLife (vida de la batería) de tipo número. Añade un método charge() que
// imprima un mensaje diciendo que el coche se está cargando.

class Car_4{
    make:string;

    constructor(make:string){
        this.make=make
    }

    drive():void{
        console.log("Driving a " + this.make)
    }
}

class ElectricCar extends Car_4{
    private batteryLife: number; // Propiedad adicional

    constructor(make: string, batteryLife: number) {
        super(make); // Llamamos al constructor de la clase car
        this.batteryLife = batteryLife;
    }

    charge(){
        return "El coche se está cargando" + this.batteryLife
    }
    
}

let carro_bateria=new ElectricCar("Toyota", 90)
console.log(carro_bateria)