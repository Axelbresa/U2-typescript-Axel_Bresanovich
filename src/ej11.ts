interface Shape {
    area(): number;
}

class Circle implements Shape {
    private radius: number; 

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

let myCircle = new Circle(5);

// Calcular y mostrar el área del círculo
console.log("La area del circulo: " + myCircle.area());
