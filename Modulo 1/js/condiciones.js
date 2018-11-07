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



/* var edades=prompt("Ingrese su edad");

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
calcularEdad(67); */


//**Operadores de comparacion */
/* var a=5;
var b=5;
if (a==b){
    console.log("a y b son iguales");
}

if (a==b){
    console.log("a y b son iguales en tipo y en valor");
}

else{
    console.log("a y b no son igules ni en tipo en valor")
}

//**Operador ternario */
/* var aux=0;
if (a==b){
    aux=5;
    console.log(aux);
}

else{
    aux=10;
    console.log(aux);
}
var result= a==b?  10 : 20;    //**Operador tenario es el signo de interrogacion */
//**Primero va lo vedadero y despues de los puntos va lo falso */
// console.log(result); */ */

// var year=prompt("Introduzca un año");
// var result= year != 2018? true : false;

//**Switch:ideal para menus y escojer contenido */
var day=prompt("Introduzac un dia de la semana");
function setDay(day){

    switch (day){
        case "sabado":
        console.log("Voy a ir al cine");
        break;
    
        case "domingo":
        console.log("Voy a hacer deporte");
        break;
    
        case "lunes":
        console.log("Voy a trabajar");
        break;
    
        default: 
        console.log("No es un dia valido");

    }
}
setDay(day);
setDay("domingo");
setDay(13);

l