
const getXPerpendicular = (line_perp,line) =>{
    return (line[1] - line_perp[1])/(line_perp[0] - line[0]);
}

const getYPerpendicular = (x,line) => {
    return line[0] * x + line[1];
}

function reflect(point, line) {

    const x_l = line[0];//peniente de la linea
    const x_p = point[0];//pendiente del punto
    const y_p = point[1];//interxcepto del punto

    if(x_l === 0) return [x_p,( line[1] + line[1]-y_p)];
    
    const x_perp = x_l === 0 ? 0 : (-1 * (Math.pow(x_l,-1))); //pendiente de la linea perpendicular que pasa por el punto
    const y_perp = (x_perp*(-1)*x_p)+y_p; //intercepto de la pendiente de la linea perpendicular que pasa por el punto
    console.log(x_perp);
    console.log(y_perp);
    const point_xP = getXPerpendicular([x_perp,y_perp],line);
    const point_yP = getYPerpendicular(point_xP,line);
    console.log(point_xP);
    console.log(point_yP);
    
    return [isNaN((2*point_xP)-x_p) ? 0 :(2*point_xP)-x_p, isNaN((2*point_yP)-y_p) ? 0 : (2*point_yP)-y_p];
}


// console.log(reflect([-2, 0], [-1, 3]));
// console.log(reflect([0, 8], [-1/2, 2]));
// console.log(reflect([-2, -3], [-1, 0]));
console.log(reflect([1, 1], [0, 440]));