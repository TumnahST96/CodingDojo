package Zoo;

public class Mammal {
	private int energyLevel; 
	
	public Mammal() {
		this.energyLevel = 100;
	}
	
	public int displayEnergy() {
		System.out.println("Total Energy is "+energyLevel);
		return energyLevel;
	}

}
