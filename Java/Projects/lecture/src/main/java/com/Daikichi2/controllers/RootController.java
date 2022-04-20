package com.Daikichi2.controllers;

import java.util.*;

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
//		session.invalidate();
		if(session.getAttribute("stories")==null) {
			
			
			session.setAttribute("stories", new ArrayList<String>());
			
		}
		
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
		
		ArrayList<String> stories = (ArrayList<String>) session.getAttribute("stories");
		stories.add(story);
		session.setAttribute("stories", stories);
 		System.out.println("stories " + stories);
		System.out.println("session story : " + session.getAttribute("stories"));
		
		
		return "redirect:/";
	}
};
