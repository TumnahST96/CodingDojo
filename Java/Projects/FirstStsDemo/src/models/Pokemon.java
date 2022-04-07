package models;

public class Pokemon {
	private String name;
	private int attack, specAttack, defSpec, defHealth;
	private boolean fainted;
	
	
	
	public Pokemon() {
		super();
	}

	public Pokemon(String name, int attack, int specAttack, int defSpec, int defHealth, boolean fainted) {
		super();
		this.name = name;
		this.attack = attack;
		this.specAttack = specAttack;
		this.defSpec = defSpec;
		this.defHealth = defHealth;
		this.fainted = fainted;
	}
	

	

	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public int getAttack() {
		return attack;
	}



	public void setAttack(int attack) {
		attack = attack;
	}



	public int getSpecAttack() {
		return specAttack;
	}



	public void setSpecAttack(int specAttack) {
		this.specAttack = specAttack;
	}



	public int getDefSpec() {
		return defSpec;
	}



	public void setDefSpec(int defSpec) {
		this.defSpec = defSpec;
	}



	public int getDefHealth() {
		return defHealth;
	}



	public void setDefHealth(int defHealth) {
		this.defHealth = defHealth;
	}



	public boolean isFainted() {
		return fainted;
	}



	public void setFainted(boolean fainted) {
		this.fainted = fainted;
	}



	
}
