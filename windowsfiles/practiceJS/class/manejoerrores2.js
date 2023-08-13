let result = '';

try{
	if (isNaN(result)) throw 'No es un numero';
	else if (result === '') throw 'la variable esta vacia';
}catch(error){
	console.log(error);
	console.log(error.name);
	console.log(error.message);
} 
finally{
	console.log('termina revision de errores');
}

