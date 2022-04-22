package com.Daikichi2.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.Daikichi2.models.Lecture;
import com.Daikichi2.services.SongService;

@Controller
public class SongController {
	
	private SongService songServe; 
	
	public SongController(SongService ss) {
		this.songServe = ss;
		
	}
	
	@GetMapping("/song")
	public String NewSong(Model model) {
		model.addAttribute("lecture", new Lecture());
		model.addAttribute("songs",songServe.RealAll());
		return "NewSong";
	}
	
	@PostMapping("/song")
	public String song_create(@Valid @ModelAttribute("lecture") Lecture lec, BindingResult res) {
		if(res.hasErrors()) {
			return "NewSong";
		}
		songServe.Create(lec);
		return "redirect:/song";
	}
	
	@GetMapping("/song/{id}")
	public String songShow(
		
			@PathVariable("id") Long id, Model model
	) {
		Lecture song = songServe.FindOne(id);
		model.addAttribute("song", song);
		return "SongShow";
	}
	
	@GetMapping("/song/{id}/edit")
	public String song_edit
	(
		@PathVariable("id") Long id,
		Model model
	)
	{
		Lecture song=songServe.FindOne(id);
		if(song==null) return "redirect:/song";
		model.addAttribute("lecture",song);
		return "EditPage";
	}	
	
	@PostMapping("/song/{id}/update")
	public String song_update
	(
		@Valid @ModelAttribute("lecture") Lecture song,
		BindingResult res,
		Model model,
		@PathVariable("id") Long id
	)
	{		
		if(res.hasErrors())
		{
//			model.addAttribute("lecture",song);
			System.out.println("HAS ERRORS");
			return "EditPage";
		}
//		song.setId(id);
		songServe.Update(song);
		return "redirect:/song";
	}	
	
	@PostMapping("/song/{id}/delete")
	public String song_delete
	(
		@PathVariable("id") Long id
	)
	{
		songServe.Delete(id);
		return "redirect:/song";
	}
};
