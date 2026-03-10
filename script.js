
// IF - else
function verificarEdad(){

let edad = document.getElementById("edad").value;

if(edad >= 18){
document.getElementById("resultadoEdad").innerHTML="Es mayor de edad";
}else{
document.getElementById("resultadoEdad").innerHTML="Es menor de edad";
}

}

// switch
function mostrarDia(){

let dia = document.getElementById("dia").value;
let resultado;

switch(dia){

case "1":
resultado="Lunes";
break;

case "2":
resultado="Martes";
break;

case "3":
resultado="Miércoles";
break;

default:
resultado="Día no válido";

}

document.getElementById("resultadoDia").innerHTML=resultado;

}

// TRY CATCH con error
function probarError(){

try{

throw new Error("Fallo Critico, el equipo va a explotar");

}catch(error){

document.getElementById("errorMsg").innerHTML=error.message;

}

}

// ciclo for
function mostrarNumeros(){

let texto="";

for(let i=1;i<=5;i++){

texto += i + " ";

}

document.getElementById("numeros").innerHTML=texto;

}

// funciopn 
function sumar(){

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);

let resultado = n1 + n2;

document.getElementById("resultadoSuma").innerHTML="Resultado: "+resultado;

}

// operadores aritmeticos
function operadores(){

let a=Number(document.getElementById("num1F").value);;
let b=Number(document.getElementById("num2F").value);;

let suma = a+b;
let comparacion = a>b;
let logico = (a>b && b<10);

document.getElementById("resultadoOperadores").innerHTML =
"Suma: "+suma+" Comparación: "+comparacion+" Lógico: "+logico;

}

//  numero y clase math
function calcularMath(){

let numero = 64;
let raiz = Math.sqrt(numero);

document.getElementById("resultadoMath").innerHTML="Raíz cuadrada: "+raiz;

}

// fechas
function mostrarFecha(){

let fecha = new Date();

document.getElementById("fecha").innerHTML=fecha;

}

// strings
function usarString(){

let texto="javascript es divertido";

let resultado = texto.toUpperCase();

document.getElementById("texto").innerHTML=resultado;

}

// arreglos
function mostrarArreglo(){

let frutas=["Manzana","Banano","Naranja"];

document.getElementById("arreglo").innerHTML=frutas[1];

}

// DOM
function cambiarColor(){

let elementos = document.getElementsByClassName("claseEjemplo");

for(let i=0;i<elementos.length;i++){

elementos[i].style.color="red";

}

}