package com.codingDojo.controller;

import javax.servlet.http.HttpSession;
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
import com.codingDojo.model.LoginUser;
import com.codingDojo.model.Owner;
import com.codingDojo.model.User;
import com.codingDojo.services.CandyService;
import com.codingDojo.services.OwnerService;
import com.codingDojo.services.UserService;

@Controller
public class HomeController {

	//Injecting our candyservice
	private final CandyService candyServ;
	private final OwnerService ownerServe;
	private final UserService userServe;
	
	
	public HomeController(CandyService CS, OwnerService ownerServe, UserService userServe) {
		this.candyServ = CS;
		this.ownerServe = ownerServe;
		this.userServe = userServe; 
	}
	
	
	@GetMapping("/")
    public String index(Model model) {
    
        // Bind empty User and LoginUser objects to the JSP
        // to capture the form input
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index";
    }
	
	
	
	//login reg stuff
	
	
	
	
	 @PostMapping("/register")
	    public String register(@Valid @ModelAttribute("newUser") User newUser, 
	            BindingResult result, Model model, HttpSession session) {
	        
	        // TO-DO Later -- call a register method in the service 
	        // to do some extra validations and create a new user!
	        userServe.register(newUser, result);
	        if(result.hasErrors()) {
	            // Be sure to send in the empty LoginUser before 
	            // re-rendering the page.
	            model.addAttribute("newLogin", new LoginUser());
	            return "index";
	        }
	        
	        // No errors! 
	        // TO-DO Later: Store their ID from the DB in session, 
	        // in other words, log them in.
	        session.setAttribute("user_id", newUser.getId());
	    
	        return "redirect:/dashboard";
	    }
	    
	    @PostMapping("/login")
	    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
	            BindingResult result, Model model, HttpSession session) {
	        
	        // Add once service is implemented:
	        User user = userServe.login(newLogin, result);
	    
	        if(result.hasErrors()) {
	            model.addAttribute("newUser", new User());
	            return "index";
	        }
	    
	        // No errors! 
	        // TO-DO Later: Store their ID from the DB in session, 
	        // in other words, log them in.
	        session.setAttribute("user_id", user.getId() );
	        return "redirect:/dashboard";
	    }
	    
	    @GetMapping("/logout")
	    public String logout(HttpSession session) {
	    	session.invalidate();
	    	return "redirect:/";
	    }
	    
	    
	    ///
	    
	    
	    //all candy stuff
	
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
	public String newCandyForm(@ModelAttribute("candy")Candy candy, Model model) {
		model.addAttribute("allOwner", ownerServe.allOwners());
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
	
	//route to render owner form
		@GetMapping("/newOwner")
		public String newOwnerForm(@ModelAttribute("owner")Owner owner) {
			return "newOwner";
		}
		//process the post to create candy
		@PostMapping("/processOwner")
		public String postingOwner(@Valid @ModelAttribute("owner")Owner owner, BindingResult result) {
			
			if(result.hasErrors()) return "newOwner";
			
			else {
				ownerServe.createOwner(owner);
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
