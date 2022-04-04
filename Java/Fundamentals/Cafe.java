import java.util.Scanner;

import javax.print.DocFlavor.STRING;

public class Cafe {
    
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        String orderedMessage = " ordered a ";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffeePrice = 5.5;
        double lattePrice = 5.5;
        double cappuccinoPrice = 5.5;


        double cus1Total = 0.0;
        double cus2Total = 0.0;
        double cus3Total = 0.0;
        double cus4Total = 0.0;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = false;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = false;
    


        Scanner sc = new Scanner(System.in);
        int k = 1;
        System.out.println("Press only 1 if you would like to order");
        k = sc.nextInt();
        while(k==1){
            System.out.println("Press 1 for  Cindhuri\n2 for Sam\n3 for Jimmy\nand 4 for Noah ");
            int a = sc.nextInt();
            int b;
            if(a==1){
                System.out.println(generalGreeting+customer1);
                b = menu(mochaPrice, dripCoffeePrice,lattePrice,cappuccinoPrice);
                
                if(b==1){
                    cus1Total+=mochaPrice;

                    System.out.println(customer1 + orderedMessage+ " mocha.");
                    disPlay(displayTotalMessage, cus1Total, pendingMessage);
                    

                    isReadyOrder1 = true;
                    isReady(isReadyOrder1, customer1, readyMessage);
                }
                if(b==2){
                    cus1Total+=dripCoffeePrice;
                    System.out.println(customer1 + orderedMessage+ " drip Coffee.");
                    disPlay(displayTotalMessage, cus1Total, pendingMessage);
                    
                    isReadyOrder1 = true;
                    isReady(isReadyOrder1, customer1, readyMessage);
                }
                if(b==3){
                    cus1Total+=lattePrice;
                    System.out.println(customer1 + orderedMessage+ " latte.");
                    disPlay(displayTotalMessage, cus1Total, pendingMessage);
                    
                    isReadyOrder1 = true;
                    isReady(isReadyOrder1, customer1, readyMessage);
                }
                if(b==4){
                    cus1Total+=cappuccinoPrice;
                    System.out.println(customer1 + orderedMessage+ " cappuccino.");
                    disPlay(displayTotalMessage, cus1Total, pendingMessage);
                    
                    isReadyOrder1 = true;
                    isReady(isReadyOrder1, customer1, readyMessage);
                }
              
            }
            if(a==2){
                System.out.println(generalGreeting+customer2);
                b = menu(mochaPrice, dripCoffeePrice,lattePrice,cappuccinoPrice);
               
                if(b==1){
                    cus2Total+=mochaPrice;

                    System.out.println(customer2 + orderedMessage+ " mocha.");
                    disPlay(displayTotalMessage, cus2Total, pendingMessage);
                    

                    
                    isReady(true, customer2, readyMessage);
                }
                if(b==2){
                    cus2Total+=dripCoffeePrice;
                    System.out.println(customer2 + orderedMessage+ " drip Coffee.");
                    disPlay(displayTotalMessage, cus2Total, pendingMessage);
                    
                    isReadyOrder2 = true;
                    isReady(isReadyOrder2, customer2, readyMessage);
                }
                if(b==3){
                    cus2Total+=lattePrice;
                    System.out.println(customer2 + orderedMessage+ " latte.");
                    disPlay(displayTotalMessage, cus2Total, pendingMessage);
                    
                    isReadyOrder2 = true;
                    isReady(isReadyOrder2, customer2, readyMessage);
                }
                if(b==4){
                    cus2Total+=cappuccinoPrice;
                    System.out.println(customer2 + orderedMessage+ " cappuccino.");
                    disPlay(displayTotalMessage, cus2Total, pendingMessage);
                    
                    isReadyOrder2 = true;
                    isReady(isReadyOrder2, customer2, readyMessage);
                }
            }
            if(a==3){
                System.out.println(generalGreeting+customer3);
               
                b = menu(mochaPrice, dripCoffeePrice,lattePrice,cappuccinoPrice);
                if(b==1){
                    cus3Total+=mochaPrice;

                    System.out.println(customer3 + orderedMessage+ " mocha.");
                    disPlay(displayTotalMessage, cus3Total, pendingMessage);
                    

                    isReadyOrder3 = true;
                    isReady(isReadyOrder3, customer3, readyMessage);
                }
                if(b==2){
                    cus3Total+=dripCoffeePrice;
                    System.out.println(customer3 + orderedMessage+ " drip Coffee.");
                    disPlay(displayTotalMessage, cus3Total, pendingMessage);
                    
                    isReadyOrder3 = true;
                    isReady(isReadyOrder3, customer3, readyMessage);
                }
                if(b==3){
                    cus3Total+=lattePrice;
                    System.out.println(customer3 + orderedMessage+ " latte.");
                    disPlay(displayTotalMessage, cus3Total, pendingMessage);
                    
                    isReadyOrder3 = true;
                    isReady(isReadyOrder3, customer3, readyMessage);
                }
                if(b==4){
                    cus3Total+=cappuccinoPrice;
                    System.out.println(customer3 + orderedMessage+ " cappuccino.");
                    disPlay(displayTotalMessage, cus3Total, pendingMessage);
                    
                    isReadyOrder3 = true;
                    isReady(isReadyOrder3, customer3, readyMessage);
                }
            }
            if(a==4){
                System.out.println(generalGreeting+customer4);
                b = menu(mochaPrice, dripCoffeePrice,lattePrice,cappuccinoPrice);
                if(b==1){
                    cus4Total+=mochaPrice;

                    System.out.println(customer4 + orderedMessage+ " mocha.");
                    disPlay(displayTotalMessage, cus4Total, pendingMessage);
                    

                    isReadyOrder4 = true;
                    isReady(isReadyOrder4, customer4, readyMessage);
                }
                if(b==2){
                    cus4Total+=dripCoffeePrice;
                    System.out.println(customer4 + orderedMessage+ " drip Coffee.");
                    disPlay(displayTotalMessage, cus4Total, pendingMessage);
                    
                    isReadyOrder4 = true;
                    isReady(isReadyOrder4, customer4, readyMessage);
                }
                if(b==3){
                    cus4Total+=lattePrice;
                    System.out.println(customer4 + orderedMessage+ " latte.");
                    disPlay(displayTotalMessage, cus4Total, pendingMessage);
                    
                    isReadyOrder4 = true;
                    isReady(isReadyOrder4, customer4, readyMessage);
                }
                if(b==4){
                    cus4Total+=cappuccinoPrice;
                    System.out.println(customer4 + orderedMessage+ " cappuccino.");
                    disPlay(displayTotalMessage, cus4Total, pendingMessage);
                    
                    isReadyOrder4 = true;
                    isReady(isReadyOrder4, customer4, readyMessage);
                }
            }
            System.out.println("Press 1 to order again, any other key to leave");
            k = sc.nextInt();
            
        }

      

    }
    public static int menu (double mochaPrice, double dripCoffeePrice, double lattePrice, double cappuccinoPrice){
        System.out.println("Here is Our manu. What would you like?\n1 Mocha-----$"+mochaPrice+"\n2 Drip Coffee-----$"+dripCoffeePrice+"\n3 Latte-----$"+lattePrice+"\n4 Cappuchino-----$"+cappuccinoPrice);
        Scanner sc = new Scanner(System.in);
        int b = sc.nextInt();
        return b;
    }
    public static  void disPlay(String displayTotalMessage, double mochaPrice, String pendingMessage) {
            
        System.out.println(displayTotalMessage+" "+mochaPrice+" Thank you for shopping with us"+ pendingMessage);
        
    }

    public static void isReady(Boolean flag, String customer1, String readyMessage){
        if(flag){
            
                System.out.println(customer1+readyMessage);
            
        }
        
    }
    
}
