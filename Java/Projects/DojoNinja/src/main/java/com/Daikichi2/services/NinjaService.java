package com.Daikichi2.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.Daikichi2.model.DojoModel;
import com.Daikichi2.model.NinjaModel;
import com.Daikichi2.repository.NinjaRepository;

@Service    
public class NinjaService {
	private final NinjaRepository ninjaRepo;

	public NinjaService(NinjaRepository ninjaRepo) {
		super();
		this.ninjaRepo = ninjaRepo;
	}
	
	//create dojo
	public NinjaModel createNinja(NinjaModel ninja) {
		return ninjaRepo.save(ninja);
	}
	
	//find all dojo
	public List<NinjaModel> allNinjas(){
		return ninjaRepo.findAll();
	}
	
	//find one dojo
		public NinjaModel findNinja(Long id) {
			
			Optional<NinjaModel> optOwner = ninjaRepo.findById(id);
			
			if(optOwner.isPresent()) {
				return optOwner.get();
			}
			else return null;
		}
		
	//delete a dojo
		
	public void Delete(Long id) {
		ninjaRepo.deleteById(id);
	}
	
}
