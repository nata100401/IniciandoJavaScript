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
// var sum=0;
// var average=0;
// var count=0;
// var num=25;
// debugger;
// while (num>0) {
//     num=parseInt(prompt("Ingrese un numero"));
//     if(!isNaN(num) && num>=0){
//         count++;
//         sum+=num;
//     }
// }
// average=sum/count;
// alert("La sumatoria es:  "+sum+"\n"+"El promedio es:  "+average);


//**Mostrar todos los numeros que hay entree un rango inicial y un rango fianl suministrado
//por el ususario */

// var iRank=parseInt(prompt("Ingrese el primer valor del rango"));
// var fRank=parseInt(prompt("Ingrese el segundo valor del rango"));
//  if(!isNaN(iRank) && !isNaN(fRank) && iRank>0 && fRank>0 && iRank<fRank){

//    document.write("<h1> De "+iRank+" Hasta "+fRank+" Existen los siguientes numeros:</h1>");

//     for (let index = iRank; index <=fRank ; index++) {
//         if(index%2==0);
//        console.log (index);
//        document.write("<b>"+index+"</b><br>");
// }

//  }

//**Pedir por pantalla un numero y mostrar cuales son sus divisores */

// var num=parseInt(prompt("Ingrese un numero"));
// if(!isNaN(num) && num>=0){
//     document.write("<h1> Los divisores de "+num+"son: </h1>");
//     for (let index = 0; index <=num; index++) {
//      if(num%index==0){
//          document.write("<b>"+index+"</b><br>")
//      }   
//     }
// }

// var num=parseInt(prompt("Ingrese un numero"));
// while(isNaN(num)){
//     alert ("Ingrese un numero");
//     num=parseInt(prompt("Ingrese un numero"));
// }
// if(num%2==0){
//     alert("Es un numero par");
// }
// else{
//     alert("Es un numero impar");
// }

var usu=(prompt("Ingrese su usuario"));
var contra=parseInt(prompt("Ingrese su contraseña"));




alert("Bienvenid@  "   +usu)