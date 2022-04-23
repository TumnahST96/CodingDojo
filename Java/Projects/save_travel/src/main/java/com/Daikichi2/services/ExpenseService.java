package com.Daikichi2.services;

import java.util.ArrayList;

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
};
