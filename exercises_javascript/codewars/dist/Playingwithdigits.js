"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
class G964 {
}
G964.digPow = (n, p) => {
    let sum = 0;
    const toString = n.toString();
    const toArray = toString.split('');
    const toArrayInt = toArray.map(num => parseInt(num));
    const result = toArrayInt.reduce((acumulator, currentValue) => {
        acumulator += Math.pow(currentValue, p);
        p++;
        return acumulator;
    }, 0);
    return Number.isInteger(result / n) ? result / n : -1;
};
exports.G964 = G964;
//# sourceMappingURL=Playingwithdigits.js.map