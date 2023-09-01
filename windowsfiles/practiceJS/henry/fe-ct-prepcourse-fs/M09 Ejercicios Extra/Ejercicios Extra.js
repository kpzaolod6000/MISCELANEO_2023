/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arr = [];
   for (const key in objeto) {
      let subArr = [];
      subArr.push(key);
      subArr.push(objeto[key]);
      arr.push(subArr);
   }
   return arr;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   let data = {};
   string.split().sort().forEach(element => {
      data[element] = 0;
   });

   string.split().sort().forEach(element => {
      if(data.hasOwnProperty(element)) data[element] += 1;
   });

   return data;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:  
   let min = "";
   let may = "";

   for (let i = 0; i < string.length; i++) {
      
      if (string[i].toUpperCase() === string[i]) may += string[i];
      else min += string[i];
   }
   return may+min;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let arrFrase = frase.split(' ');
   for (let i = 0; i < arrFrase.length; i++) {

      let inv = "";
      for (let j = arrFrase[i].length - 1; j >=0 ; j--) inv += arrFrase[i][j];
      arrFrase[i] = inv;
      
   }
   return arrFrase.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let letter = numero.toString();
   for (let i = 0, j = letter.length - 1; i <= j; i++,j--) {
      if (letter[i] != letter[j]) return "No es capicua"; 
   }
   return "Es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let stringNew = "";
   for (let i = 0; i < string.length; i++) {
      const element = string[i];
      if (element != "a" && element != "b" && element != "c") stringNew += element;
   }
   return stringNew;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   for (let i = 0; i < arrayOfStrings.length; i++) {
      
      for (let j = 0; j < arrayOfStrings.length - i -1; j++) {
         const long = arrayOfStrings[j].length;
         const longNext = arrayOfStrings[j+1].length;
         let temp = "";
         if (long > longNext) {
            temp = arrayOfStrings[j];
            arrayOfStrings[j] = arrayOfStrings[j+1];
            arrayOfStrings[j+1] = temp;
         }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let dicc = {}

   array1.forEach(element => {
      dicc[element] = 0;
   });

   array2.forEach(element => {
      if (dicc.hasOwnProperty(element)) dicc[element] +=1;
   });

   let intersection = [];
   for (const key in dicc) {
      if (dicc[key] > 0) intersection.push(key*1);
   }
   return intersection;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
