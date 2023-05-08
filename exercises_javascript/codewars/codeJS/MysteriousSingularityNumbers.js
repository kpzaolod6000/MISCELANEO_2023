function realNumbers(n){
//your code here
    let sum_ = 0;
    // for (let i = 1,j = n; i <= n/2 , j > n/2; i++, j--){
    //     console.log(j);

    //     if ((i % 2 === 0 || i % 3 === 0 || i % 5 === 0) && (j % 2 === 0 || j % 3 === 0 || j % 5 === 0 ))
    //         continue;
    //     else
    //         sum_++;
    // }
    for (let i = 1,j = n; i <= n/2 , j > n/2; i++, j--){
        if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0)
          sum_++;
        if (j % 2 !== 0 && j % 3 !== 0 && j % 5 !== 0 )
          sum_++;
    }

    return sum_;
}

console.log(realNumbers(99157));