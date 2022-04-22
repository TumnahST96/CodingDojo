package com.Daikichi2.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Daikichi2.models.Lecture;
import com.Daikichi2.repositories.SongRepository;

@Service
public class SongService {
	@Autowired
	private SongRepository songRepo;
	
	public SongService(SongRepository sr) {
		this.songRepo = sr; 
	}
	
	public void Create(Lecture song) {
		songRepo.save(song);
	}
	
	public Lecture FindOne(Long id) {
		
		Optional<Lecture> song = songRepo.findById(id);
		
		return song.isPresent()?song.get():null;
	}
	
	public ArrayList<Lecture> RealAll(){
		return (ArrayList<Lecture>) songRepo.findAll();
	}
	
	public void Delete(Long id) {
		songRepo.deleteById(id);
	}
	
	public void Update(Lecture song)
	{
		Create(song);
	}
	
};
