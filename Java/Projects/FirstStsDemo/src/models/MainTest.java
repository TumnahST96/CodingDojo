package models;

public class MainTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println();
		System.out.println("Hellow world!!!!");
		
		Pokemon pk = new Pokemon();
		
		Pokemon charz = new Pokemon ("Charizo", 0, 1, 5, 0, false);
		Pokemon jaRule = new Pokemon ("Ja Rule", 4, 2, 9, 2, false);
		
		
		System.out.println(jaRule.getAttack());
//		jaRule.getAttack();
//		jaRule.getAttack();
//		jaRule.getAttack();
//		jaRule.getAttack();
	}

}
