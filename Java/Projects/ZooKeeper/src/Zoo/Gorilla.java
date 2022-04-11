package Zoo;

public class Gorilla extends Mammal {
	
	public Gorilla() {
		super();
		
	}
	
	public void throwSomething(int n) {
		System.out.println("Thorwing "+n+" banana's at you");
		this.energyLevel-=5;
	}
	
	public void eatBananas(int bana) {
		System.out.println("Gorilla eats "+bana+ " bananas and very satisfied");
		this.energyLevel+=10;
	}
	public void climb() {
		System.out.println("Gorilla likes climbing");
		this.energyLevel-=10;
	}
}
