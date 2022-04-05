import java.util.ArrayList;
import java.io.*;
import java.util.*;


public class Test {
    public static void main(String[] args) {
        PuzzleJava puzz = new PuzzleJava();
        System.out.println(puzz.getTenRolls(20));

        System.out.println(puzz.getRandomLetter());
        System.out.println(puzz.generatePassword());
        System.out.println(puzz.getNewPasswordSet());
        ArrayList<Integer> randomRolls = new ArrayList<Integer>();

        int i = 5, j = 5;
        while(i>0){
            randomRolls.add(puzz.getTenRolls(10));
            i--;
        }

        System.out.println(randomRolls);

        while(j>0){
            Collections.swap(randomRolls, puzz.getTenRolls(5), puzz.getTenRolls(5));
            j--;
        }

        System.out.println(randomRolls);

    }
}
