package com.Daikichi2;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class theController {


	
	
	
	
	@RequestMapping("/")
	public String index() {
		return "index";
		
	}
	
	@RequestMapping("/date")
	public String datez(Model model) {
		Date date = new Date();
		SimpleDateFormat dates = new SimpleDateFormat("EEEEE DD MMMMM yyyy");
		model.addAttribute("date", dates.format(date));
		return "date";
	}
	
	@RequestMapping("/time")
	public String timez(Model model) {
		Date date = new Date();		
		SimpleDateFormat times = new SimpleDateFormat("HH:mm:ss");
		model.addAttribute("time", times.format(date));
		return "time";
	}
	
}
