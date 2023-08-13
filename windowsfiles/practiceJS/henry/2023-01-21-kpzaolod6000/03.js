/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function sumaTodosPrimos(array) {
  // La funcion llamada 'sumaTodosPrimos' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros que sean primos.
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Ej:
  // sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]) devuelve 5 + 2 + 3 + 11 = 21
  // Nota: Podes usar la funcion 'esPrimo' resuelta en la homework JSII.

  // Tu código aca:

  let sum_ = 0;
  array.forEach(element => {
    let cont = 0;
    if (element != 0 || element != 1){
      for (let i = 1; i <= element; i++) {
        if (element % i === 0) cont++;
      }
      if (cont === 2) {
        sum_ += element;
      }
    }
  });

  return sum_;
}

// No modifiques nada debajo de esta linea //

module.exports = sumaTodosPrimos