package com.codingDojo.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="owners")
public class Owner {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min = 3, max=30)
	private String firstName; 
	
	@NotNull
	@Size(min = 3, max=30)
	private String lastName; 
	
	
	//creating one to many relationship with candy class
	@OneToMany(mappedBy="owner", fetch = FetchType.LAZY)
	private List<Candy> candys;

	

	public Owner() {
		
	}



	public Owner(Long id, @NotNull @Size(min = 3, max = 30) String firstName,
			@NotNull @Size(min = 3, max = 30) String lastName, List<Candy> candys) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.candys = candys;
	}

	

	public Owner(@NotNull @Size(min = 3, max = 30) String firstName,
			@NotNull @Size(min = 3, max = 30) String lastName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
	}



	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public List<Candy> getCandys() {
		return candys;
	}


	public void setCandys(List<Candy> candys) {
		this.candys = candys;
	}
	
	
	
	
}
