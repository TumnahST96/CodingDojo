package com.codingdojo.daikichi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class RootController
{
	@GetMapping("/travel/{id}")
	public String travel(@PathVariable("id") String location)
	{
		return "<h1>Congratulations You will soon travel to: "+location+"</h1>";
	}
	
	@GetMapping("/lotto/{id}")
	public String lotto(@PathVariable("id") Integer n)
	{
		String options[]=
		{
				"You will take a grand journey in the near future, but be weary of tempting offers",
				"You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends."
		};		
		return options[n%2];
	}
};