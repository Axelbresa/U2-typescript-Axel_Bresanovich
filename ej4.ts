// 4. Interfaz opcional
// Modifica la interfaz Person del ejercicio anterior para que la propiedad lastName
// sea opcional. Declara un objeto que solo incluya firstName. 

interface Persona{
    firsName:string;
    lastName?:string;
}


let person_2:Persona={
    firsName:"Axel",
}

console.log(person_2)

