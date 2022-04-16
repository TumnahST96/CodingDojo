package com.Daikichi2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/daikichi")
public class DaikchiMessages {
//	@RequestMapping("/")
//	public String first() {
//		return "Welcome!";
//	}
//	@RequestMapping("/today")
//	public String day() {
//		return "Today will find luck in all endeavors!";
//	}
//	
//	@RequestMapping("/tomorrow")
//	public String days() {
//		return "Tomorrow will find luck in all endeavors!";
//	}
	
	@GetMapping("/travel/{city}")
	public String showLesson(@PathVariable("city") String city){
	    	return "<h1>Congratulations! You will soon travel to "+ city+"<h1/>";
	    }
	
	@GetMapping("/lotto/{id}")
	public String Lotto(@PathVariable("id") Integer id){
		 
			if(id%2==0) {
				return "<h1>You will take a grand journey in the near future, but be weary of tempting offers <h1/>";
			}
			else return "<h1>You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.<h1/>";
	    	
	    	
	    }
	
}
