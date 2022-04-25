
package com.codingDojo.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "candys")
public class Candy {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min = 3, max=30)
	private String name; 
	
	@NotNull
	@Size(min = 3, max=15)
	private String brand;
	@NotNull
	@Min(value =1, message = "Must be greater than 0")
	@Max(value = 10, message = "Must be less than 10")
	private int rating; 
	@NotNull
	@Min(1)
	@Max(10)
	private int price;
	
	//creating many to one relationship with owner class
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="owner_id")
    private Owner owner;
	
	public Candy() {
		
	}
	
	
	public Candy(@NotNull @Size(min = 3, max = 30) String name, @NotNull @Size(min = 3, max = 15) String brand,
			@NotNull @Min(value = 1, message = "Must be greater than 0") @Max(value = 10, message = "Must be less than 10") int rating,
			@NotNull @Min(1) @Max(10) int price, Owner owner) {
		super();
		this.name = name;
		this.brand = brand;
		this.rating = rating;
		this.price = price;
		this.owner = owner;
	}


	public Candy(Long id, @NotNull @Size(min = 3, max = 30) String name, @NotNull @Size(min = 3, max = 15) String brand,
			@NotNull @Min(0) @Max(10) int rating, @NotNull @Min(1) @Max(10) int price) {
		super();
		this.id = id;
		this.name = name;
		this.brand = brand;
		this.rating = rating;
		this.price = price;
	} 
	
	
	
	public Owner getOwner() {
		return owner;
	}

	public void setOwner(Owner owner) {
		this.owner = owner;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	
	
	
	
}
