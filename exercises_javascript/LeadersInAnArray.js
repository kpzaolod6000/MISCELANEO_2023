const fs = require('fs');
//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */
 
class Solution {
    //Function to find the leaders in the array.

    leaders(arr, n){
        let last = arr[n-1];
        let result = [last];
        for (let i = n-2; i >= 0; i--) {
            const element = arr[i];
            if (element >= last) {
                // result.unshift(element); // mucho costo 
                result.push(element);
                last = element; 
            }

        }
        // return result;
        return result.reverse();
    }

    leaders_2(arr, n){

    }
}


fs.readFile('LeadersInAnArray.txt', 'utf8', (error, datos) => {
  if (error) {
    console.error(error);
    return;
  }
  
  const lineas = datos.trim().split('\n');
  let n = lineas[0];  
  let data = lineas[1].split(' ').map((num) => (parseInt(num)));
  console.log(data);
  const sol = new Solution();
  console.log(sol.leaders(data,n));
});
