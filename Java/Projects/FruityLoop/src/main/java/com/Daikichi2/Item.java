package com.Daikichi2;

public class Item {
	private double price; 
	private String name;
	
	public Item() {
		this.name = "";
		this.price = 0.0;
	}
	
	public Item(String name, double price) {
		this.name = name;
		this.price = price;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
