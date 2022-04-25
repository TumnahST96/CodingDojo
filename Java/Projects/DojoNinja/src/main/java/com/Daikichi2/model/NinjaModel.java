package com.Daikichi2.model;

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
@Table(name = "ninjas")
public class NinjaModel {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min = 3, max=30)
	private String FirstName; 
	
	@NotNull
	@Size(min = 3, max=30)
	private String LastName; 
	
	@NotNull
	@Min(1)
	@Max(80)
	private Integer age;
	
	//creating many to one relationship with dojo class
		@ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name="dojo_id")
	    private DojoModel dojo;

	
		
	public NinjaModel() {
		
	}



	public NinjaModel(@NotNull @Size(min = 3, max = 30) String firstName,
			@NotNull @Size(min = 3, max = 30) String lastName, @NotNull @Min(1) @Max(80) Integer age) {
		
		this.FirstName = firstName;
		this.LastName = lastName;
		this.age = age;
	}
	
	
	



	public NinjaModel(@NotNull @Size(min = 3, max = 30) String firstName,
			@NotNull @Size(min = 3, max = 30) String lastName, @NotNull @Min(1) @Max(10) Integer age, DojoModel dojo) {
		super();
		FirstName = firstName;
		LastName = lastName;
		this.age = age;
		this.dojo = dojo;
	}



	public DojoModel getDojo() {
		return dojo;
	}



	public void setDojo(DojoModel dojo) {
		this.dojo = dojo;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getFirstName() {
		return FirstName;
	}



	public void setFirstName(String firstName) {
		FirstName = firstName;
	}



	public String getLastName() {
		return LastName;
	}



	public void setLastName(String lastName) {
		LastName = lastName;
	}



	public Integer getAge() {
		return age;
	}



	public void setAge(Integer age) {
		this.age = age;
	}
	
	
		
	
		
}
