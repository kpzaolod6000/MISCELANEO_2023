public class Person {
    private String name;
    private int age;
    private int phone;

    public void setName(String name){
        this.name = name;
    }
     public String getName(){
        return this.name;
     }
    public void setAge(int age){
        this.age = age;
    }
    public int getAge(){
        return this.age;
    }

    public void setPhone(int phone){
        this.phone = phone;
    }
    public int getPhone(){
        return this.phone;
    }
}

class Customer extends Person {
    private int credit;
    public void setCredit(int credit){
        this.credit = credit;
    }
    public int getCredit(){
        return this.credit;
    }
}

class Worker extends Person {
    private int salary;

    public void setSalary(int credit){
        this.salary = credit;
    }
    public int getSalary(){
        return this.salary;
    }
}
