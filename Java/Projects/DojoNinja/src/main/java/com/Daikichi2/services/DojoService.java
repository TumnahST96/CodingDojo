package com.Daikichi2.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.Daikichi2.model.DojoModel;
import com.Daikichi2.repository.DojoRepository;


@Service
public class DojoService {

	private final DojoRepository dojoRepo;

	public DojoService(DojoRepository dojoRepo) {
		super();
		this.dojoRepo = dojoRepo;
	}
	
	//create dojo
	public DojoModel createDojo(DojoModel dojo) {
		return dojoRepo.save(dojo);
	}
	
	//find all dojo
	public List<DojoModel> allDojos(){
		return dojoRepo.findAll();
	}
	
	//find one dojo
		public DojoModel findDojo(Long id) {
			
			Optional<DojoModel> optOwner = dojoRepo.findById(id);
			
			if(optOwner.isPresent()) {
				return optOwner.get();
			}
			else return null;
		}
		
	//delete a dojo
		
	public void Delete(Long id) {
		dojoRepo.deleteById(id);
	}
	
	
}
