
import java.util.Random;

public class PuzzleJava {

    public int getTenRolls(int num) {
        Random rand = new Random();
        int n = rand.nextInt(num);

        return n;
    }

    public char getRandomLetter() {
        char[] alphabet = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                's', 't', 'u', 'v', 'w', 'x', 'y', 'z' };

        Random rand = new Random();
        int n = rand.nextInt(26);

        return alphabet[n];
    }

    public String generatePassword (){
        String str = "";
        for(int i=0; i<8; i++){
            char c = getRandomLetter();
            str+=c;
        }

        return str;
    }

    public int getNewPasswordSet(){
        String str = "";
        for(int i=0; i<8; i++){
            int c = getTenRolls(10);
            str+=c;
        }
        int num = Integer.parseInt(str);
        return num;
    }

}
