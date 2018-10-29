//**Realizar un script que poda el usuario de dos numeros  cual de los dos 
/*numeros es mayor, cual es el menor o identificar si son iguales*/

/* var numero1= prompt("Ingrese numero1");
console.log("Este es su numero1", numero1);

var numero2= prompt("Ingrese numero2");
console.log("Este es su numero2", numero2);

var numero1;
var numero2;

if(numero1>numero2){
    console.log("El numero mayor es", numero1);
}

else if(numero1<numero2){
    console.log("El numero mayor es", numero2);
}
else{
    console.log("Los numeros son iguales");
} */

//**Ingresar por pantalla la edad de una persona, si la persona es mayor de
/*18 años indicar que es mayor de edad de lo
/* de lo contrario es menor de edad, si tiene la edad >=33 debe salir ERES MILENIAL >33 
/*y <70 NO ES UN MILENIAL
si es >=70 ERES UN ANCIANO y si es  */

/* var edad= prompt("Ingrese su edad");
console.log("Esta es su edad", edad);

var edad;
if(edad>=18){
    console.log("Es mayor de edad", edad);
}

if(edad<18){
    console.log("Es menor de edad", edad);
}

else if(edad>=33){
    console.log("No eres un Milenial", edad);
}

else if(edad>34 & edad<69){
    console.log("Eres un Milenial", edad);
}
if(edad>=70){
    console.log("Eres un anciano", edad);
}
 */



var edades=prompt("Ingrese su edad");

function calcularEdad(ed)
{
if(ed >= 18)
{
    console.log("Es mayor de edad", ed);
    if (ed <= 33)
{
    console.log("Usted es Milenial", ed);
}

else if(ed>=70)
{
    console.log("Usted es una anciano", ed);
}

else{
    console.log("Ya no es Milenial", ed);
}
}

else{
    console.log("Usted es menor de edad", ed);
}
}

debugger;
calcularEdad(edades);
calcularEdad(23);
calcularEdad(89);
calcularEdad(15);
calcularEdad(67);