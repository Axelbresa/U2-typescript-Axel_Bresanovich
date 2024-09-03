// 7. Clase básica
// Define una clase Car que tenga una propiedad make (marca del coche) de tipo string
// y un método drive() que imprima un mensaje en la consola diciendo "Driving a
// [make]".


class Car{
    make:string;

    constructor(make:string){
        this.make=make
    }

    drive():void{
        console.log("Driving a " + this.make)
    }
}


let carro=new Car("toyota")
console.log(carro)