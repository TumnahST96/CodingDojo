package com.codingDojo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingDojo.model.Candy;
import com.codingDojo.repository.CandyRepository;

@Service
public class CandyService {
	
	private final CandyRepository candyRepo;
	
	public CandyService(CandyRepository candyRepo) {
		this.candyRepo = candyRepo;
		
	}
	
	//find all candies
	public List<Candy>allCandys(){
		return candyRepo.findAll();
	}
	
	//create candies
	
	public Candy createCandy(Candy candy) {
		return candyRepo.save(candy);
	}
	
	//find one candy
	public Candy findCandy(Long id) {
		
		Optional<Candy> optCandy = candyRepo.findById(id);
		
		if(optCandy.isPresent()) {
			return optCandy.get();
		}
		else return null;
	}
	
	
	//delete a candy from rpeo
	
	public void candyMan(Long id) {
		
		candyRepo.deleteById(id);
	}
	
	
	//update one candy
	public Candy updateCandy(Candy candy) {
		return candyRepo.save(candy);
	}
	
}
