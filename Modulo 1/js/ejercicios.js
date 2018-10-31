//**Tipos de variables */
// var name="Natalia";
// console.log("El tipo de name es: ",typeof name);

// var age="17";
// console.log("El tipo de age es: ",typeof age);

// var active=true
// console.log("El tipo de active es: ",typeof active);

// //**Conversiones numericas */
// var age=parseInt(prompt("Ingrese su edad"));
// if(isNaN(age)){
//     alert("Valor incorrecto, digite en numero")
// }
// else{
//     alert("Su edad es: "+age)
// }
// alert (age);

//**EJERCICIO 1: Mostar la sumatoria y la media de los numeros introducidos por pantalla 
//hasta que el numero sea negativo */
var sum=0;
var average=0;
var count=0;
var num=25;
debugger;
while (num>0) {
    num=parseInt(prompt("Ingrese un numero"));
    if(!isNaN(num) && num>=0){
        count++;
        sum+=num;
    }
}
average=sum/count;
alert("La sumatoria es:"+sum+" el promedio es"+average);