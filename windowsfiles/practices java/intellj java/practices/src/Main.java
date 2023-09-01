public class Main {
    public static String getEstacion(int estacion){
        switch(estacion){
            case 1:
                return "Primavera";
            case 2:
                return "Verano";
            case 3:
                return "Otoño";
            case 4:
                return "Invierno";
            default:
                return "No es una estacion";

        }
    }
    public static void main(String[] args) {

        int numeroIf = 0;

        if(numeroIf > 0){
            System.out.println("Positivo");
        }
        else if(numeroIf < 0){
            System.out.println("Negativo");
        }
        else{
            System.out.println("Cero");
        }

        int numeroWhile = 0;
        while(numeroWhile  < 3 ){
            System.out.println(numeroWhile++);
        }

        numeroWhile = 0;
        do{
            System.out.println(numeroWhile++);
            break;
        }while(numeroWhile < 3);

        int numeroFor;
        for(numeroFor = 0; numeroFor<=3; numeroFor++ ){
            System.out.println(numeroFor);
        }

        System.out.println(getEstacion(3));

        Person person1 = new Person();
        person1.setName("kelvin");
        person1.setAge(25);
        person1.setPhone(913456754);
        System.out.println(person1.getName());
        System.out.println(person1.getAge());
        System.out.println(person1.getPhone());
    }
}