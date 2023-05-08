const fs = require('fs');

class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(a, n)
    {
        if (n === 1) return (n-1)+1;
        let ini_ = 1;
        let end_ = n-2;
        let beforeAcum = a[0];
        let afterAcum = a[n-1];

        for (; ini_ < end_;) {
            
            if(beforeAcum >= afterAcum) {
                afterAcum += a[end_];
                end_--;
            }
            else if(beforeAcum < afterAcum) {
                beforeAcum += a[ini_];
                ini_++;
            }else{
                let tempAfter = afterAcum + a[end_-1];
                let tempBefore = beforeAcum + a[ini_+1];
                if (tempAfter === afterAcum) end_--;
                else if (tempBefore === beforeAcum ) ini_++;
            }
        }
        return ini_ === end_ && afterAcum == beforeAcum ? ini_+1 : -1;
    }
}

fs.readFile('EquilibriumPoint.txt', 'utf8', (error, datos) => {
    if (error) {
      console.error(error);
      return;
    }

    const splitDatos = datos.trim().split('\n');
    const n = parseInt(splitDatos[0]);
    
    const data = splitDatos[1].split(' ').map((elem) => parseInt(elem));
    const sol =  new Solution();
    console.log(sol.equilibriumPoint(data,n));
    
  });
  