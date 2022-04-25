package com.Daikichi2.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.Daikichi2.model.DojoModel;

public interface DojoRepository extends CrudRepository<DojoModel, Long>{

	List<DojoModel>findAll();
}
