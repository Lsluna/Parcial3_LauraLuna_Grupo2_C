/* 
Laura Sofía Luna Pachón
Grupo 2
Problema C : Pago de un comparendo de tránsito con descuento por curso
*/

const salarioMDLV = 60000 //$60.000 COP
const infraccionA = 900000 //$900.000 COP
const infraccionB = 1800000 //$1.800.000 COP
const infraccionC = 2700000 //$2.700.000 COP

//Descuentos

const descuentoCurso = 0.50 //50%
const descuentoPagoTemprano = 0.25 //25%

// Variables de entrada

let tipoInfraccion = prompt("¿Cuál es su tipo de infracción? (A,B,C)");
let realizoCurso = prompt("¿Realizó el curso?\n Escriba \n S: Si realizó el curso \n N: No realizó el curso");
let diasHabiles = prompt("¿Hace cuántos días hábiles le pusieron la infracción?")

// Procesos de cálculo 

if (tipoInfraccion !== A || tipoInfraccion !== B || tipoInfraccion !== C)  {
alert ("Tipo de infracción no válida. Seleccione entre (A,B,C)");
} else if (realizoCurso !== S || realizoCurso !== N) {
alert ("Valor ingresado no válido. Escriba S o N");
} else if (NaN(diasHabiles) || diasHabiles < 1) {
alert ("Valor de días hábiles no válido. Escriba un número mayor a 1");    
}

let valorComparendo = 0

switch (valorComparendo) {
    case A:
    infraccionA * salarioMDLV
        break;
    case B:
    infraccionB * salarioMDLV
         break;
    case C:
    infraccionC * salarioMDLV
        break;
    default:
        alert("Ingrese su tipo de infracción para poderla calcular")
        break;
}

if (realizoCurso === S && diasHabiles <= 5) {
    let porcentajeDescuento = infraccionA - descuentoCurso 
} else if (otraCondicion) {
    // Se ejecuta si la primera es falsa y esta es verdadera
} else {
    // Se ejecuta si ninguna condición se cumple
}


