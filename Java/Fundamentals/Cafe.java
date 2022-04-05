import java.util.Hashtable;
import java.util.*;
import java.util.Scanner;

public class Cafe {

    public static void main(String[] args) {

        Choices c = new Choices();
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
        Hashtable<String, Double> menu = new Hashtable<String, Double>();
        Hashtable<String, Double> customers = new Hashtable<String, Double>();
        menu.put("mochaPrice", mochaPrice);
        menu.put("dripCoffeePrice", dripCoffeePrice);
        menu.put("lattePrice", lattePrice);
        menu.put("cappuccinoPrice", cappuccinoPrice);

        // Order completions (add yours below)
        boolean isReadyOrder1 = false;

        int counter = 0, goal = 55;
        double DefaultTotal = 0, totalForStore = 0.0;
        Choices.init(goal, menu);

        System.out.println("-----Add Customer Test-----");
        Choices.print(customers);
        System.out.println("Press only 1 if you would like to order");
        Scanner sc = new Scanner(System.in);
        int k = 1;
        k = sc.nextInt();

        while (k == 1) {

            String b;

            String name = Choices.getName();

            Choices.waiting(name, counter);

            Choices.greetings(generalGreeting, name);

            b = menus(menu);

            double total = Choices.makeChoice(b, menu);
            totalForStore = totalForStore + total;

            customers.put(name, customers.getOrDefault(name, DefaultTotal) + total);
            Choices.print(customers);

            System.out.println(name + orderedMessage + " mocha.");
            Choices.disPlay(displayTotalMessage, customers.get(name), pendingMessage);

            isReadyOrder1 = true;
            Choices.isReady(isReadyOrder1, name, readyMessage);

            Choices.OrderTotal(totalForStore);

            if (counter == goal) {
                System.out.println("We are Sold out");
            }
            counter++;
            System.out.println("Press 1 to order again, any other key to leave");
            k = sc.nextInt();

        }
    }

    public static String menus(Hashtable<String, Double> menu) {

        Enumeration<String> names = menu.keys();
        Hashtable<Integer, String> menuIndex = new Hashtable<Integer, String>();
        int ct = 1;
        while (names.hasMoreElements()) {
            String str = (String) names.nextElement();
            System.out.println(ct + " " + str + ": " + menu.get(str));
            menuIndex.put(ct, str);
            ct++;
        }
        System.out.println();
        System.out.println("Please Press a Number for Corresponding Order");
        Scanner sc = new Scanner(System.in);
        int b = sc.nextInt();

        return menuIndex.get(b);

    }

}