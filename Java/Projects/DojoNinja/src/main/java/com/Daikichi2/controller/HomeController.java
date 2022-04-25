package com.Daikichi2.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.Daikichi2.model.DojoModel;
import com.Daikichi2.model.NinjaModel;
import com.Daikichi2.services.DojoService;
import com.Daikichi2.services.NinjaService;



@Controller
public class HomeController {
	
	
	
	private final DojoService dojoServe; 
	private final NinjaService ninjaServe;
	
	

	public HomeController( DojoService dojoServe,NinjaService ninjaServe ) {
		super();
		
		this.dojoServe = dojoServe;
		this.ninjaServe =  ninjaServe;
	}



	@GetMapping("/dashboard")
	public String dashboard(Model model) {
		
		model.addAttribute("allDojo",dojoServe.allDojos());
		return "AllDojo";
	}
	
	

	//route to make a dojo
	
	//render the new dojo form ----databinding
	@GetMapping("/newDojo")
	public String newDojoForm(@ModelAttribute("dojo")DojoModel dojo, Model model) {
		model.addAttribute("allDojo", dojoServe.allDojos());
		return "NewDojo";
	}
	
	
	
	//process the post to create candy
	@PostMapping("/processDojo")
	public String postingDojo(@Valid @ModelAttribute("dojo")DojoModel dojo, BindingResult result) {
		
		if(result.hasErrors()) return "NewDojo";
		
		else {
			dojoServe.createDojo(dojo);
		}
		
		
		return "redirect:dashboard";
	}
	
	///show one dojo
	
	@GetMapping("/oneDojo/{id}")
	public String oneDojo(@PathVariable("id")Long id,  Model model) {
		
		model.addAttribute("dojo", dojoServe.findDojo(id));
		
		return "NinjasForADojo";
	}
	
	//delete
	
	//new Ninja
	
	@GetMapping("/newNinja")
	public String newNinjaForm(@ModelAttribute("ninja")NinjaModel ninja, Model model) {
		model.addAttribute("allDojo", dojoServe.allDojos());
		return "NewNinja";
	}
	//process the post to create candy
		@PostMapping("/processNinja")
		public String postingNinja(@Valid @ModelAttribute("ninja")NinjaModel ninja, BindingResult result) {
			
			if(result.hasErrors()) return "NewNinja";
			
			else {
				ninjaServe.createNinja(ninja);
			}
			
			
			return "redirect:dashboard";
		}
	
}
