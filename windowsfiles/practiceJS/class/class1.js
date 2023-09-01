class Persona{
    static contObjectPerson = 0;

    static get MAX_OBJ(){
        return 5;
    }

    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        if (Persona.contObjectPerson < Persona.MAX_OBJ) {
            this.id = ++Persona.contObjectPerson;   
        }else{
            console.log('Se han superado el maximo de objetos permitidos');
        }
    };
    get getName(){
        return this.name;
    };

    set setName(name){
        this.name = name;
    };
    
    getNameComplete(){
        return this.id + ' ' + this.name + ' '+ this.surname;
    }

    toString(){
        return this.getNameComplete();
    }

    static saludos(){
        console.log('saludos desde la parte static de la clase Persona ');
    }

    static saludos1(person){
        return person.name;
    }
};


class Employee extends Persona{
    constructor(name, surname, departament){
        super(name,surname,departament);
        this.departament = departament;
    };
    
    get getDepartament(){
        return this.departament;
    };

    set setDepartament(departament){
        this.departament = departament;
    };

    // sobreEscritura
    getNameComplete(){
        return super.getNameComplete() + ', ' + this.departament;
    }
};

let persona1 = new Persona('kelvin', 'pucho');
console.log(persona1);
persona1.setName = 'Paul';
console.log(persona1);

let persona2 = new Persona('cristina', 'pucho');
console.log(persona2);

console.log(persona1.getName);

let employee1 = new Employee('merlina','lopez','sistemas');
console.log(employee1.name);
console.log(employee1);
console.log(employee1.getNameComplete());
console.log(employee1.toString());
console.log(employee1.id);

/** las variables y metodos static se asocian con la clase pero no con los objetos por ejemplo */

// console.log(employee1.saludos()); // no funciona

console.log(Persona.saludos());
console.log(Persona.saludos1(employee1));

console.log(Persona.contObjectPerson);
console.log(Employee.contObjectPerson);

console.log(Persona.MAX_OBJ);
