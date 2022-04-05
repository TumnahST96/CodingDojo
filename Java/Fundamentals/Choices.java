import java.util.Enumeration;
import java.util.Hashtable;
import java.util.Scanner;

public class Choices {
    public static double makeChoice(String b, Hashtable<String, Double> menu) {

        double cusTotal = 0.0;

        cusTotal = cusTotal + menu.get(b);

        return cusTotal;

    }

    public static void disPlay(String displayTotalMessage, double total, String pendingMessage) {

        System.out.println(displayTotalMessage + " " + total + " Thank you for shopping with us" + pendingMessage);

    }

    public static void greetings(String generalGreeting, String customer) {

        System.out.println(generalGreeting + customer);

    }

    public static String getName() {
        System.out.println("Please Enter your name:");
        Scanner sc = new Scanner(System.in);

        String a = sc.nextLine();
        return a;
    }

    public static void isReady(Boolean flag, String customer1, String readyMessage) {
        if (flag) {

            System.out.println(customer1 + readyMessage);

        }

    }

    public static void print(Hashtable<String, Double> name) {
        Enumeration<String> names = name.keys();
        while (names.hasMoreElements()) {
            String str = (String) names.nextElement();
            System.out.println(str);
        }
    }

    public static void SingleMenu(Hashtable<String, Double> menu) {

        Enumeration<String> names = menu.keys();
        Hashtable<Integer, String> menuIndex = new Hashtable<Integer, String>();
        int ct = 1;
        while (names.hasMoreElements()) {
            String str = (String) names.nextElement();
            System.out.println(ct + " " + str + ": " + menu.get(str));
            menuIndex.put(ct, str);
            ct++;
        }

    }

    public static void OrderTotal(double total) {
        System.out.println("----- Order Total Test -----");
        System.out.println("Order total: " + total);
    }

    public static void waiting(String name, int ct) {
        System.out.println("Hello " + name + "! There are " + ct + " people ahead of you");
    }

    public static void init(int goal, Hashtable<String, Double> menu) {
        System.out.println("----- Streak Goal Test -----");
        System.out.println();
        System.out.println("Purchases needed by week 10: " + goal);
        System.out.println();

        System.out.println("-----Display Menu Test-----");
        SingleMenu(menu);
        System.out.println();

    }

}
