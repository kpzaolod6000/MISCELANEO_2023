'use strict';

 try{
	x = 10;
	//let x = 10;<
	//throw 'Mi error';
 }catch(error){
 	console.log(error);
 }finally{
 	console.log("termina la revision de errores");
 }

console.log("continue...");