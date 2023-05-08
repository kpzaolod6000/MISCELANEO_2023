const fs = require('fs');


/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
*/

class Solution {
    
    sort012(arr, N)
    {
        let elem = [0,0,0];
        arr.forEach(element => {
          if (element === 0) elem[0] += 1;
          else if (element === 1) elem[1] += 1;
          else if (element === 2) elem[2] += 1;
        });
        
        let fi = new Array(elem[0]).fill(0);
        let se = new Array(elem[1]).fill(1);
        let tr = new Array(elem[2]).fill(2);
        // return [...fi,...se,...tr];

        const result = [fi,se,tr].flatMap(item => item);
        return result;
    }
}

fs.readFile('in.txt', 'utf8', (error, datos) => {
  if (error) {
    console.error(error);
    return;
  }
  
  const lineas = datos.trim().split('\n');
  let n = lineas[0];  
  let data = lineas[1].split(' ').map((num) => (parseInt(num)));
  // let data  = lineas[1].split(' ');
  console.log(data);
  const sol = new Solution();
  console.log(sol.sort012(data,n));
//   console.log(n);
//   console.log(data);

});

