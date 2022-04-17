package com.Daikichi2.models;

public class Item {
	
	private String name, description;
	private Double price; 
	
	public Item() {
		this.name = "";
		this.description = "";
		this.price = 0.0; 
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Item(String name, String description, Double price) {
			this.name = name;
			this.description = description;
			this.price = price; 
	}
};
