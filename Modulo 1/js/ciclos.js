// var rep=prompt("Ingrese el numero de repeticicones");
// for (let index = 0; index <= rep; index++) {
//     console.log(index);
// }

// //**Leer 10 numeros por teclado e imprimir si son pares y si es multimplo de 3 */
// for (let index = 0; index < 10; index++) {
//     var num=prompt("Ingresr el numero de repeticiones");
//     if(num%3==0){
//         console.log("Es un multiplo de tres",num)
//     }

//  if(num%2==0){
//     console.log("Es par",num)
// }

// else{
//     console.log("No es par ni multiplo de tres",num)
// }
// }

//**Ciclo While */
//**Rezlizar la sumatorio de numeros ingresados por pantalla, cuando el numero sea igual a
//cero me debe imprimir el resultado de la sumatoria */

var num=prompt("Ingresar un numero");
var sum=0;

while (num!=0) {
    sum=sum+num;
    num=prompt("Ingrese un numero");
}
console.log("La sumatoria de todos los numeros es: ",sum);
