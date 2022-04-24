package com.codingDojo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingDojo.model.Candy;

@Repository
public interface CandyRepository extends CrudRepository<Candy, Long>{
	
	List<Candy>findAll();

}
