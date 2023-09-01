class DispEntry{
    constructor(type,mark){
        this.type = type;
        this.mark = mark;
    }

    get getType(){
        return this.type;q
    }

    set setType(type){
        this.type = type;
    }

    get getMark(){
        return this.mark;
    }

    set setMark(mark){
        this.mark = mark;
    }
    toString(){
        return `Tipo de entrada: ${this.type} marca: ${this.mark}`;
    }
}

class Mouse extends DispEntry{
    static contMouse = 0;
    constructor(type,mark){
        super(type,mark);
        this.id = ++Mouse.contMouse;
    }

    toString(){
        return `Id del Raton: ${this.id} ` + super.toString();
    }
}

class Keyboard extends DispEntry{
    static contKeyboard = 0;
    constructor(type,mark){
        super(type,mark);
        this.id = ++Keyboard.contKeyboard;
    }

    get getId(){
        return this.id;
    }

    toString(){
        return `Id del teclado: ${this.id} ` + super.toString();
    }
};


class Monitor {
    static contMonitor = 0;
    constructor(mark,_long){
        this.id = ++Monitor.contMonitor;
        this.mark = mark;
        this._long = _long;
    }

    get getId(){
        return this.id;
    }

    toString(){
        return `Monitor : ${this.id}, marca:  ${this.mark} tamaño: ${this._long}`;
    }
};

class Computer{
    static contComputer = 0;
    constructor(name,monitor,mouse,keyboard){
        this.id = ++Computer.contComputer;
        this.name = name;
        this.monitor = monitor;
        this.mouse = mouse;
        this.keyboard = keyboard;
    }

    toString(){
        return `Computadora ${this.id}, Nombre: ${this.name} \n${this.monitor} \n${this.mouse} \n${this.keyboard}`;
    }
};

class Order {
    static contOrder = 0;
    constructor(){
        this.id = ++Order.contOrder;
        this.computers = [];
    }

    addComputers(computer){
        this.computers.push(computer);
    }

    showOrder(){
        let compOrder = '';
        for(let computer of this.computers){
            compOrder += '\n' + computer.toString();
        }

        return `Orden:  ${this.id}, Computadoras: ${compOrder}`;
    }
};

let raton1 = new Mouse('USB','HP');
console.log(raton1.toString());

let raton2 = new Mouse('wifi','lenovo');
console.log(raton2.toString());

let teclado1 = new Keyboard('bluetooth','lenovo');
console.log(teclado1.toString());

let teclado2 = new Keyboard('USB','ASUS');
console.log(teclado2.toString());

let monitor1 = new Monitor('HP',14);
console.log(monitor1.toString());

let monitor2 = new Monitor('Lenovo',19);
console.log(monitor2.toString());

let computadora1 = new Computer('Intel', monitor1, raton1, teclado1);
console.log(computadora1.toString());

let computadora2 = new Computer('Ryzen', monitor2, raton2, teclado2);
console.log(computadora2.toString());

let orden1 = new Order();

orden1.addComputers(computadora1);
orden1.addComputers(computadora2);

console.log(orden1.showOrder());
