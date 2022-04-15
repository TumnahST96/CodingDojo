package com.Tamma.firstspring;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HomeController {
	
//	@RequestMapping("/")
//	public String world() {
//		return "Hello Human";
//	}
	
	@RequestMapping("/")
	public String index(@RequestParam(value="first", required = false) String first, @RequestParam(value="last", required = false) String last, @RequestParam(value="time", required = false, defaultValue = "1") Integer time) {
		String f=first;
		String s = last;
		int t = time;
		if(f == null) {
			f = "Human";
		}
		if(s == null) {
			s = "";
		}
		if(t<1) {
			t = 1; 
		}
		String output = f+ " "+s;
		String finalMessage = "Hello ";
		for(int i=0; i<t; i++) {
			finalMessage+= " "+output;
			
		}
		return finalMessage;
	}
	
	

}
