function function1(){
	console.log("Funcion 1");
}

function function2(){
	console.log("Funcion 2");
}

function1();
function2();

function sumar(result){
	console.log(result);
}

let multi = (result) => {
	console.log(result);
}

function print(a,b,functionCallback){
	let rpta = a + b;
	functionCallback(`Resultados: ${rpta}`);
}

print(5,5,sumar);
print(5,5,multi);

//** Llamadas asincronas con uso de setTimeout */

function myFunctionAsync(){
	console.log("Saludos asincronos despues de 3 segundos");
}

setTimeout(myFunctionAsync,3000);

setTimeout(function(){console.log("saludos 5 segundos");},5000);
setTimeout(() => {console.log("saludos 1 segundos");},1000);