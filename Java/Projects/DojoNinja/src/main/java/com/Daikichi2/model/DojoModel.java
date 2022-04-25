package com.Daikichi2.model;

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
@Table(name="Dojos")
public class DojoModel {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	Long id;
	
	@NotNull
	@Size(min = 3, max=30, message = "Name must be greater than 3 and less than 30")
	private String Name;
	
	
	//one to many rerlation with ninja class
	@OneToMany(mappedBy="dojo", fetch = FetchType.LAZY)
	private List<NinjaModel> ninjas;

	public DojoModel() {
		super();
	}
	
	

	public DojoModel(@NotNull @Size(min = 3, max = 30) String name) {
		super();
		Name = name;
	}



	public DojoModel(Long id, @NotNull @Size(min = 3, max = 30) String name) {
		super();
		this.id = id;
		this.Name = name;
	}
	
	
	
	

	public DojoModel(
			@NotNull @Size(min = 3, max = 30, message = "Name must be greater than 3 and less than 30") String name,
			List<NinjaModel> ninjas) {
		super();
		Name = name;
		this.ninjas = ninjas;
	}



	public List<NinjaModel> getNinjas() {
		return ninjas;
	}



	public void setNinjas(List<NinjaModel> ninjas) {
		this.ninjas = ninjas;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	} 
	
	
	
	
	
	
}

