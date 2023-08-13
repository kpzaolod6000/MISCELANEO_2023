class Product{
    static contProduct = 0;

    constructor(name, price){
        this.id = ++Product.contProduct;
        this.name = name;
        this.price = price;
    }

    get getId(){
        return this.id;
    }
    get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }

    get getPrice(){
        return this.price;
    }

    set setPrice(price){
        this.price = price;
    }

    toString(){
        return `idProduct: ${this.id}\n 
                Nombre: ${this.name}\n
                Precio: $${this.price}\n`;
    }
};

class Order {
    static conOrder = 0;

    static get MAX_PRODUCT(){
        return 5;
    }

    constructor(){
        this.id = ++Order.conOrder;
        this.products = [];
        this.contProductAdd = 0;
    }

    get getId(){
        return this.id;
    }

    addProduct(product){
        if (this.products.length < Order.MAX_PRODUCT) {
            this.products.push(product);
            //this.products[this.contProductAdd++] = product;
        }else{
            console.log('No se puede agregar mas productos')
        }
    }

    calculateTotal(){
        let totalVent = 0;
        for (let product of this.products) {
            totalVent += product.price;
        }
        return totalVent;
    }

    showOrder(){
        let producOrder = '';
        for (let product of this.products) {
            producOrder += product.toString();
        }
        
        return `Orden: ${Order.conOrder} \nTotal: $ ${this.calculateTotal()}\nProductos: \n\n${producOrder}`;
    }
}



let product1 = new Product('Pantalon',50);
let product2 = new Product('Camisa',40);
let product3 = new Product('Zapatillas',130);

console.log(product1.toString());

let newOrder = new Order();
newOrder.addProduct(product1);
newOrder.addProduct(product2);
newOrder.addProduct(product3);
console.log(newOrder.showOrder());