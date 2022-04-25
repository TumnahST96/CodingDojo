package com.Daikichi2.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.Daikichi2.model.NinjaModel;



public interface NinjaRepository extends CrudRepository<NinjaModel, Long>{

	List<NinjaModel>findAll();
}
