

public class Account {
    public static void main(String[] args) {
        Member nMember = new Member();

        System.out.println(nMember.getAccNumber());

        nMember.depositCheck(5000.00);
        nMember.depositSave(2000.00);
        System.out.println("Checking Balance is $"+nMember.getCheckBalance());
        System.out.println("Saving Balance is $"+nMember.getSaveBalance());
        nMember.withDrawSave(50.25);
        System.out.println("Savings now "+nMember.getSaveBalance());
        nMember.withDrawCheck(78.75);
        System.out.println("Checking now "+nMember.getCheckBalance());
        System.out.println(nMember.totalAccNum());
        System.out.println("Total Money all for nMember is "+nMember.totalMoneyAllAcc());
    }

}
