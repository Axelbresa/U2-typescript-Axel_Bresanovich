// 13. Enum
// Declara un enum Color con los valores "Red", "Green", y "Blue". Crea una función
// que tome un argumento de tipo Color y devuelva un mensaje con el color. 

enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function getColorMessage(color: Color): string {
    return `The selected color is ${color}.`;
}

console.log(getColorMessage(Color.Green)); // The selected color is Green.
console.log(getColorMessage(Color.Blue));  // The selected color is Blue.
