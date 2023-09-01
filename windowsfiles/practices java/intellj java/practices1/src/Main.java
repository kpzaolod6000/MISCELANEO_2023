public class Main {
    public static void main(String[] args) {
        Customer cus = new Customer();
        cus.setName("Kelvin");
        cus.setAge(25);
        cus.setPhone(967583929);
        cus.setCredit(4);
        System.out.println(cus.getName());
        System.out.println(cus.getAge());
        System.out.println(cus.getPhone());
        System.out.println(cus.getCredit());

        Worker wor = new Worker();
        wor.setName("Flormy");
        wor.setAge(26);
        wor.setPhone(980839201);
        wor.setSalary(2140);

        System.out.println(wor.getName());
        System.out.println(wor.getAge());
        System.out.println(wor.getPhone());
        System.out.println(wor.getSalary());

    }
}