export class G964 {

    public static digPow = (n: number, p: number) : number => {
        let sum:number = 0;
        const toString: string = n.toString()
        const toArray: string[] = toString.split('');
        const toArrayInt = toArray.map(num => parseInt(num));

        const result = toArrayInt.reduce((acumulator:number, currentValue:number) => {
            acumulator += Math.pow(currentValue,p);
            p++;
            return acumulator;
        },0)
        return Number.isInteger(result/n) ? result/n : -1;
    }
}