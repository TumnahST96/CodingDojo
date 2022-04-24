package com.Daikichi2.controllers;

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

import com.Daikichi2.models.Expense;
import com.Daikichi2.services.ExpenseService;



@Controller
public class ExpenseController {
	
	private final ExpenseService expenseServe;
	
	
	public ExpenseController(ExpenseService expenseServe) {
		this.expenseServe = expenseServe;
	}

	
	@GetMapping("/dashboard")
	public String index(Model model) {
		
		model.addAttribute("allExpens", expenseServe.FindAll());
		return "expenses";
	}
	

	//route to make a candy 
	
	//render the new candy form ----databinding
	@GetMapping("/newExpense")
	public String newCandyForm(@ModelAttribute("travel")Expense expense) {
		
		return "newExpense";
	}
	
	
	//process the post to create candy
	@PostMapping("/processTravel")
	public String processingTravel(@Valid @ModelAttribute("travel")Expense expense, BindingResult result) {
		
		if(result.hasErrors()) return "newExpense";
		
		else {
			expenseServe.Create(expense);
		}
		
		
		return "redirect:dashboard";
	}
	
	//Route to show one candy
		@GetMapping("/oneExpense/{id}")
		public String oneExpense(@PathVariable("id")Long id,  Model model) {
			
			model.addAttribute("travel", expenseServe.findExpense(id));
			return "expenses_show";
		}
	
	//route to delete a candy 
		@GetMapping("/delete/{id}")
		public String delete(@PathVariable("id")Long id,  Model model) {
			
			expenseServe.delete(id);
			return "redirect:/dashboard";
		}
		
		//render the update candfy form
		
		@GetMapping("/updateExpense/{id}")
		public String updateExpenseForm(@PathVariable("id") Long id, @ModelAttribute("expense") Expense expense, Model model) {
			model.addAttribute("expense", expenseServe.findExpense(id));
			return "expense_edit";
		}
		//process the post to update candy
		@RequestMapping(value ="/updatingExpense/{id}", method = RequestMethod.PUT)
		public String updatingExpense(@Valid @ModelAttribute("expense")Expense expense, BindingResult result) {
			
			if(result.hasErrors()) return "expense_edit";
			
			else {
				expenseServe.updateExpense(expense);
			}
			return "redirect:/dashboard";
		}
		
	
};
