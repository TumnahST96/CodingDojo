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
	
	@GetMapping("/travel/{id}")
	public String first() {
		return "Welcome!";
	}
	
	 @RequestMapping("/m/{track}/{module}/{lesson}")
	    public String showLesson(@PathVariable("track") String track, @PathVariable("module") String module, @PathVariable("lesson") String lesson){
	    	return "Track: " + track + ", Module: " + module + ", Lesson: " + lesson;
	    }
}
