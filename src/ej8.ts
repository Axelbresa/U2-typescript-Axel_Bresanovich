//  8. Clase con constructor
// Añade un constructor a la clase Car que inicialice la propiedad make. Crea una
// instancia de Car con una marca y llama al método drive().



class Car_2{
    make:string;

    constructor(make:string){
        this.make=make
    }

    drive():void{
        console.log("Driving a " + this.make)
    }
}

let coche=new Car_2("Toyota")
coche.drive()