import java.util.Hashtable;
import java.util.Scanner;

public class Choices {
    public static double makeChoice(String b, Hashtable <String, Double> menu){

        double cusTotal = 0.0;
    
        cusTotal = cusTotal+ menu.get(b); 
        
        return cusTotal;
        
    }

    public static  void disPlay(String displayTotalMessage, double total,  String pendingMessage) {
            
        System.out.println(displayTotalMessage+" "+total+" Thank you for shopping with us"+ pendingMessage);
        
    }

    public static  void greetings(String generalGreeting,  String customer) {
            
        System.out.println(generalGreeting+customer);
        
    }

    public static String getName(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Press 1 for  Cindhuri\n2 for Sam\n3 for Jimmy\nand 4 for Noah ");
        int a = sc.nextInt();
        if(a==1) return "Cindhuri";
        else if(a==2) return "Sam";
        else if(a==2) return "Jimmy";
        else return "Noah";
    }

    public static void isReady(Boolean flag, String customer1, String readyMessage){
        if(flag){
            
                System.out.println(customer1+readyMessage);
            
        }
        
    }
    
}
