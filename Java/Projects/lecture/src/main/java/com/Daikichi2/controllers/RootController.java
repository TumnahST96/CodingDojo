package com.Daikichi2.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class RootController {
	@GetMapping("/")
	public String index(Model model, HttpSession session) {
		
		if(session.getAttribute("numStories")==null) {
			session.setAttribute("numStories", 0);
		}
		if(session.getAttribute("story")!=null) {
			model.addAttribute("story", session.getAttribute("story"));
		}
		model.addAttribute("numStories", session.getAttribute("numStories"));
		
		return "index";
	}
	
	@PostMapping("/madlibs")
	public String make_story(
		@RequestParam("verb") String verb, 
		@RequestParam("Adjective") String Adjective, 
		@RequestParam("Noun") String Noun,
		HttpSession session,
		RedirectAttributes ra
			
			) {
		
		Integer error = 0;
		if(verb.length()<4) {
			ra.addFlashAttribute("verb_error", "Verb Must be at least 4 characters");
			error++;
		}
		
		if(Noun.length()<4) {
			ra.addFlashAttribute("noun_error", "Noun Must be at least 4 characters");
			error++;
		}
		if(Adjective.length()<4) {
			ra.addFlashAttribute("Adjective_error", "Noun Must be at least 4 characters");
			error++;
			
		}
		if(error>0) return "redirect:/";
		
		String story = "they said "+Adjective+" was "+Noun+" and it made me "+verb;
		session.setAttribute("story", story);
		Integer numStories = (Integer) session.getAttribute("numStories");
		session.setAttribute("numStories", numStories+1 );
		System.out.println(story);
		
		
		return "redirect:/";
	}
};
