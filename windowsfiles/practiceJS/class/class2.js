class Person {
    static contPerson = 0;
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.id = ++Person.contPerson;
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

    get getSurname(){
        return this.surname;
    }

    set setSurname(surname){
        this.surname = surname;
    }
    
    
    get getAge(){
        return this.age;
    }

    set setAge(age){
        this.age = age;
    }

    getNameComplete(){
        return this.id + ' ' + this.name + ' ' + this.surname + ' ' + this.age;
    }
    toString(){
        return this.getNameComplete();
    }
};

class Employee extends Person {
    constructor(name, surname, age, salary){
        super(name, surname, age);
        this.salary = salary;
    }

    get getId(){
        return this.id;
    }

    get getSalary(){
        return this.salary;
    }

    set setSalary(salary){
        this.salary = salary;
    }
     
    // sobreEscritura
    getNameComplete(){
        return super.getNameComplete() + ', ' + this.salary;
    }
};

class Customer extends Person {
    constructor(name, surname, age, dateRegister){
        super(name, surname, age);
        this.dateRegister = dateRegister;
    }

    get getId(){
        return this.id;
    }

    get getDateRegister(){
        return this.dateRegister;
    }

    set setDateRegister(dateRegister){
        this.dateRegister = dateRegister;
    }
     
    // sobreEscritura
    getNameComplete(){
        return `${super.getNameComplete()}, ${this.dateRegister}`;
    }
};

let person1 = new Person('Himari','Lopez', 24);
console.log(person1.toString());

let person2 = new Person('Louise','chaman',12);
console.log(person2.toString());

let employee1 = new Employee('Cristina','Zapata',24,1200);
console.log(employee1.toString());

let customer1 = new Employee('Flormy','Gutierrez',27,new Date());
console.log(customer1.toString());

/** simple test */

let a = "hola";
let b = "mundo";

console.log(a.length  === b.length)

let ah = 5.3%1;
let jh = 5.3-ah;
let ht = jh + 0.5;
console.log(jh);


let num = 4
let _decimal = num%1;
let _integer = num - _decimal;
console.log(_decimal !== 0 ? _integer+1 : _integer);


array = [1,2,3,4,5];
console.log(array.map((num) => num+1));


let cont = (array) => {
    let cont = 0;
    array.forEach(element => {
       if (element > 18) cont++;
    });
    return cont;
 }
console.log(cont(array));

let g = 797;
let g_ = g.toString();
console.log(g_.split(''));

String.prototype.reverse = function(){
    let inv = "";
    for (let i = this.length - 1; i >= 0; i--) {
        inv += this[i];
    }
    return inv;
}

let s = "nombre";
let inver = s.reverse();
console.log(inver)


for (const iterator of array) {
      console.log(iterator);
}

let ggg = s.split('');
ggg[0] = ggg[0].toUpperCase();
console.log(ggg.join(''));
console.log(ggg);

console.log(typeof 6  === 'number'? 1:0 ) 


let num_ = 11411;
let numString = num_.toString();
let boo = true;
for (let i = numString.length - 1, j = 0; i > j ; i--, j++) {
  if (numString[i] != numString[j]) boo = false;
}

console.log(boo);


const map1 = array.map((element) => {
  console.log(element);  
})


const ejem = {D: 1, B: 2, C: 3};

for (const key in ejem) {
    console.log(key);
    console.log(ejem[key]);
}

const letter = "adsjfdsfsfjsdjfhacabcsbajda";

let split_ = letter.split('');
console.log(split_);
console.log(split_.sort());


let data = {};
split_.sort().forEach(element => {
    data[element] = 0;
});

split_.sort().forEach(element => {
    if(data.hasOwnProperty(element)) data[element] += 1;
});


console.log(data);

let frase = "The Henry Challenge is close!" 
let arrFrase = frase.split(' ');

for (let i = 0; i < arrFrase.length; i++) {
    arrFrase[i] = arrFrase[i].reverse();
    
}

console.log(arrFrase);
console.log(arrFrase.join(' '));

// let arrayOfStrings = ["You", "are", "beautiful", "looking"];
let arrayOfStrings = ['pera', 'manzana', 'alcaucil', 'papa']
console.log(arrayOfStrings[0+1].length);

for (let i = 0; i < arrayOfStrings.length; i++) {
      
    for (let j = 0; j < arrayOfStrings.length - i -1; j++) {
       const long = arrayOfStrings[j].length;
       const longNext = arrayOfStrings[j+1].length;
       let temp = "";
       if (long > longNext) {
          temp = arrayOfStrings[j];
          arrayOfStrings[j] = arrayOfStrings[j+1];
          arrayOfStrings[j+1] = temp;
       }
    }
 }
 console.log(arrayOfStrings);