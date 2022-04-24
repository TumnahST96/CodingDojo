package com.Daikichi2.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.Daikichi2.models.Expense;
import com.Daikichi2.repositories.ExpenseRepository;



@Service
public class ExpenseService {

	private ExpenseRepository expenseRepository;
	
	public ExpenseService(ExpenseRepository ER) {
		this.expenseRepository = ER;
	}
	public ArrayList<Expense> FindAll(){
		return (ArrayList<Expense>)expenseRepository.findAll();
	}
	
	public void Create(Expense expense) {
		expenseRepository.save(expense);
	}
	
	//find one candy
	public Expense findExpense(Long id) {
		
		Optional<Expense> optCandy = expenseRepository.findById(id);
		
		if(optCandy.isPresent()) {
			return optCandy.get();
		}
		else return null;
	}
	
	//delete a candy from rpeo
	
	public void delete(Long id) {
		
		expenseRepository.deleteById(id);
	}
	
	//update one candy
	public Expense updateExpense(Expense expense) {
		return expenseRepository.save(expense);
	}
	
	
	
	
	
};
