function myFunction(){
	console.log("retornando mi funcion");
}

myFunction();

let myFunction1 = function(){
	console.log("retornando mi funcion");	
}

myFunction1();


let myFunction2 = () => {
	console.log("retornando mi arrow function");
}
myFunction2();

let myFunction3 = () => console.log("retornando mi arrow function");
myFunction3();

const saludos1 = () => ({nombre: 'Kelvin'});
console.log(saludos1());
const saludos2 = (a,b) => a + b;
console.log(saludos2(4,5));

const saludos3 = (a,b) => {
	for (var i = 0; i < 10; i++) {
		a += i;
	}
	console.log(a);
	return a*b;
};
console.log(saludos3(4,5));
const saludos4 = () => 4;
console.log(saludos4());
const saludos5 = function(msm){
	console.log(msm);
}
console.log(saludos5('Kelvin'));