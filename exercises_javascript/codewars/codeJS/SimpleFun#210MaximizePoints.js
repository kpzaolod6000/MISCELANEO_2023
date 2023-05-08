function maximizePoints(team1, team2) {
    let t1 = [...team1];
    let t2 = [...team2];
    t1.sort((a, b) => a - b);
    t2.sort((a, b) => a - b);
    let temp;

    for(let i = 0; i<t1.length; i++){
        if(t1[i] <= t2[i]){
            for (let j=i+1; j<t1.length; j++){
                if(t1[j] > t1[i] && t1[j] > t2[i]){
                    temp = t1[j];
                    t1[j] = t1[i];
                    t1[i] = temp;
                    break;
                }
            }
        }
    }
    const maxPoints = t1.reduce((acumulator, valueCurrent, index, array) => {

        if (t1[index] > t2[index]) return acumulator = acumulator +1;
        return acumulator;
    }, 0);

    return maxPoints;
}

// console.log(maximizePoints([3, 2, 4], [1, 2, 3]));

console.log(maximizePoints([25, 7, 26, 48],[1, 36, 5, 33]));
console.log(maximizePoints([28,72,7,6,48,25,47,93,41,87,82,63,3,78,99,40,20,88,70,2,8,19,58,86,35,21,98,87,64,73,67,66,46,36,84,71,63,56,73,26,88,72,25,86,40,72,77,98,2,73,84,51,83,85,65,68,25,55], [9,46,22,35,1,53,94,10,44,34,1,52,44,1,55,37,73,75,13,21,89,10,9,58,22,87,54,89,64,21,86,19,31,89,79,77,94,4,69,23,87,66,45,80,30,37,20,88,45,61,12,59,32,83,48,11,49,42]));
