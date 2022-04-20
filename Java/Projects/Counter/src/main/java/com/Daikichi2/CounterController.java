package com.Daikichi2;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CounterController {
	
	@GetMapping("/")
	public String index(HttpSession session) {
		
		if(session.getAttribute("count")!=null) {
			session.setAttribute("count", 0);
		}
		else {
			Integer curCount = (Integer)( 
					session.getAttribute("count")); 

			session.setAttribute("count", curCount++);
		}
		return "index";
	}
	
	@PostMapping("/madlibs")
	public String counter(Model model, HttpSession session) {
		
		if(session.getAttribute("count")!=null) {
			
			model.addAttribute("count", session.getAttribute("count"));
		}
			return "counter";	
		}

};
