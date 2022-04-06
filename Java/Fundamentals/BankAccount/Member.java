

public class Member {
    public static int numOfAccounts = 0; 
    public static double totalMoneyAcc = 0; 
    private double checkBalance;
    private double saveBalance;
    private long accountNumber;


    public Member(){
        this.checkBalance  =0;
        this.saveBalance = 0;
        numOfAccounts++;
        this.accountNumber = this.getRandAccNumber();
    }

    private long getRandAccNumber(){
        return (long) Math.floor(Math.random() * (9999999999L - 1000000000 + 1)) + 1000000000;
    }

    private void setCheckBalance(double money){
        checkBalance = checkBalance+money;
        totalMoneyAcc+=money;

    }
    public double getCheckBalance(){
        return checkBalance;
    }
    private void setSaveBalance(double money){
        saveBalance = saveBalance+money;
        totalMoneyAcc+=money;

    }
    public double getSaveBalance(){
        return saveBalance; 
    }
    
    public void depositCheck(double money){
        setCheckBalance(money);
    }
    public void depositSave(double money){
        setSaveBalance(money);
    }
    public void withDrawCheck(double money){
        if(checkBalance-money>0){
           checkBalance= checkBalance-money;
            System.out.println("You withdrew "+money+("\nYour current balance is "+checkBalance));
            totalMoneyAcc-=money;
        }
        else {
            System.out.println("Insufficient amount");
        }
    }
    public void withDrawSave(double money){
        if(saveBalance-money>0){
           saveBalance= saveBalance-money;
            System.out.println("You withdrew "+money+("\nYour current balance is "+saveBalance));
            totalMoneyAcc-=money;
        }
        else {
            System.out.println("Insufficient amount");
        }
    }

    public int totalAccNum (){
        return numOfAccounts;
    }

    public double totalMoneyAllAcc(){
        return totalMoneyAcc;
    }

    public long getAccNumber(){
        return accountNumber;
    }

    

}
