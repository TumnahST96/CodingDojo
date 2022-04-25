package com.codingDojo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingDojo.model.Owner;
import com.codingDojo.repository.OwnerRepository;

@Service
public class OwnerService {

	private final OwnerRepository ownerRepo;

	public OwnerService(OwnerRepository ownerRepo) {
		
		this.ownerRepo = ownerRepo;
	}
	
	
	//create owner
	
	public Owner createOwner(Owner owner) {
		return ownerRepo.save(owner);
	}
	
	//find all owner
	
	public List<Owner> allOwners(){
		return ownerRepo.findAll();
	}
	
	//find one owner
	public Owner findOwner(Long id) {
		
		Optional<Owner> optOwner = ownerRepo.findById(id);
		
		if(optOwner.isPresent()) {
			return optOwner.get();
		}
		else return null;
	}
//	//delete a candy from rpeo
//	
//	public void delete(Long id) {
//			
//		ownerRepo.deleteById(id);
//	}
//	//update one candy
//	public Owner updateOwner(Owner owner) {
//		return ownerRepo.save(owner);
//	}
//			
	
	
}
