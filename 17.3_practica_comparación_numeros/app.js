
//1. solicitar al usuario 3 números por prompt y guardarlos en sus 
// respectivas variables. 
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el segundo número:"));

// console.log("Número 1:", num1);
// console.log("Número 2:", num2);
// console.log("Número 3:", num3);

document.getElementById("num1").value = num1;
document.getElementById("num2").value = num2;
document.getElementById("num3").value = num3;

//2. analizar los números, identificar cual es el número mayor, el número
//  del centro y el número menor.

function comparar() {
    let numeros = [num1, num2, num3];
    numeros.sort(function(a, b) { // .sord ayuda a ordenar de mayor a menor sin afectar si hay ds numeros repetidos
        return b - a; 
    });

    let numeroMayor = numeros[0];
    let numeroCentro = numeros[1];
    let numeroMenor = numeros[2];

    // let numeroCentro;
    // if (num1 !== numeroMayor && num1 !== numeroMenor) {
    //     numeroCentro = num1;
    // } else if (num2 !== numeroMayor && num2 !== numeroMenor) {
    //     numeroCentro = num2;
    // } else {
    //     numeroCentro = num3;
    // }

//3.Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, 
// y de menor a mayor.

document.getElementById("resultado").innerHTML = `
        <strong> De mayor a menor:</strong> ${numeroMayor} , ${numeroCentro} , ${numeroMenor} <br>
        <strong> De menor a mayor:</strong> ${numeroMenor} , ${numeroCentro} , ${numeroMayor}
    `;

// 4. Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por 
// consola o por el DOM diciendo que los números son iguales.

    if (num1 === num2 && num2 === num3) {
        document.getElementById("resultado").innerHTML = "Los números son iguales.";
    }       
}       