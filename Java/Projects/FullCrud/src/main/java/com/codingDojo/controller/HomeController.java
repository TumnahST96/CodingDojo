package com.codingDojo.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingDojo.model.Candy;
import com.codingDojo.services.CandyService;

@Controller
public class HomeController {

	//Injecting our candyservice
	private final CandyService candyServ;
	public HomeController(CandyService CS) {
		this.candyServ = CS;
	}
	
	//route to show all candies
	@GetMapping("/dashboard")
	public String dashboard(Model model) {
		
		
		
		//send out candies to the jsp using model
		
		model.addAttribute("allCands", candyServ.allCandys());
		return "dashboard";
	}
	
	
	//route to make a candy 
	
	//render the new candy form ----databinding
	@GetMapping("/newCandy")
	public String newCandyForm(@ModelAttribute("candy")Candy candy) {
		
		return "newCandy";
	}
	

	
	//process the post to create candy
	@PostMapping("/processCandy")
	public String postingCandy(@Valid @ModelAttribute("candy")Candy candy, BindingResult result) {
		
		if(result.hasErrors()) return "newCandy";
		
		else {
			candyServ.createCandy(candy);
		}
		
		
		return "redirect:dashboard";
	}
	
	
	//Route to show one candy
	@GetMapping("/oneCandy/{id}")
	public String oneCandy(@PathVariable("id")Long id,  Model model) {
		
		model.addAttribute("candy", candyServ.findCandy(id));
		return "oneCandy";
	}
	//route to update a candy
	
	//route to delete a candy 
	@GetMapping("/delete/{id}")
	public String delete(@PathVariable("id")Long id,  Model model) {
		
		candyServ.candyMan(id);
		return "redirect:/dashboard";
	}
	
	//render the update candfy form
	
	@GetMapping("/updateCandy/{id}")
	public String updateCandyForm(@PathVariable("id") Long id, @ModelAttribute("candy") Candy candy, Model model) {
		model.addAttribute("candy", candyServ.findCandy(id));
		return "updateCandy";
	}
	//process the post to update candy
	@RequestMapping(value ="/updatingCandy/{id}", method = RequestMethod.PUT)
	public String updatingCandy(@Valid @ModelAttribute("candy")Candy candy, BindingResult result) {
		
		if(result.hasErrors()) return "updateCandy";
		
		else {
			candyServ.updateCandy(candy);
		}
		return "redirect:/dashboard";
	}
}
