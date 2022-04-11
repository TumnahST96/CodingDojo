package Zoo;

public class Bat extends Mammal {
	
	public Bat() {
		super();
		this.energyLevel = 300;
	}
	
	public void Fly(int n) {
		System.out.println("pfft pfft flying off "+n);
		this.energyLevel -=n*50;
	}
	
	public void eatHumans(int n) {
		System.out.println("Ate tasty humans "+n);
		this.energyLevel +=n*25;
		
	}
	public void attackTown(int num) {
		System.out.println("phooshhh firee on "+num+" towns");
		this.energyLevel -=num*100;
	}
}
