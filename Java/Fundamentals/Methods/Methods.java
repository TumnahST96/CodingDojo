public class Methods{
    public static void main(String[] args) {
        int result = Sum(12, 13);
        Log(result+"The sum is ");

        String s = Integer.toString(result);
        Log(s);
    }

    public static int Sum (int a, int b){
        return a+b;
    }
    

    public static void Log(String msg) {
        System.out.println(msg);
    }
}