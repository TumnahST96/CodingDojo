package com.codingDojo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingDojo.model.Owner;

@Repository
public interface OwnerRepository extends CrudRepository<Owner, Long> {

		List<Owner>findAll();
		
		
		
}
