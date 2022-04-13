package com.codingdojo;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class OmikujiController
{
	@GetMapping("/")
	public String index()
	{
		return "omikuji";
	}
	
	@PostMapping("/process")
	public String process
	(
		@RequestParam("number") Integer number,
		@RequestParam("city") String city,
		@RequestParam("person") String person,
		@RequestParam("hobby") String hobby,
		@RequestParam("animal") String animal,
		@RequestParam("msg") String msg,
		Model model,
		HttpSession session
	)
	{
		session.setAttribute("number",number);
		session.setAttribute("city",city);
		session.setAttribute("person",person);
		session.setAttribute("hobby",hobby);
		session.setAttribute("animal",animal);
		session.setAttribute("msg",msg);
		return "redirect:/show";
	}
	
	@GetMapping("/show")
	public String show()
	{
		return "omikuji_show";
	}
};