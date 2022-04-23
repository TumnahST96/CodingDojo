package com.codingDojo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	
	//route to show all candies
	@GetMapping("/dashboard")
	public String dashboard() {
		
		return "dashboard";
	}
	
	
	//route to make a candy 
	
	@GetMapping("/dashboard")
	public String newCandyForm() {
		
		return "newCandy";
	}
	
	//render the new candy form
	
	
	//process the post to create candy
	
	
	//route to update a candy
	
	
	//render the update candfy form
	
	
	//process the post to update candy
}
