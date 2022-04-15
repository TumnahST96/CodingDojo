package com.Daikichi2;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class DaikchiMessages {
	@RequestMapping("/")
	public String first() {
		return "Welcome!";
	}
	@RequestMapping("/today")
	public String day() {
		return "Today will find luck in all endeavors!";
	}
	
	@RequestMapping("/tomorrow")
	public String days() {
		return "Tomorrow will find luck in all endeavors!";
	}
}
