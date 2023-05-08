
/**
 * get diff of year
 * @param {*} year 
 * @returns 
 */
export const getDiffYear = (year) => {
    return new Date().getFullYear() - year;    
}

/**
 * calculate by marca
 * @param {*} marca 
 * @returns 
 */
export const calculateMarca = (marca) => {
    let inc;
    switch (marca) {
        case 'europeo':
            inc = 1.30;
            break;
        case 'americano':
            inc = 1.15;
            break
        case 'asiatico':
            inc = 1.05;
            break
        default:
            break;
    }
    return inc;
}

/**
 * get Plan basic o complete
 * @param {*} plan 
 * @returns 
 */
export const getPlan = (plan) => {
    return (plan === 'basico') ? 1.20 : 1.50;
}

/**
 * 
 * @param {*} text 
 * @returns
 */
export const firstCapitalLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}