package com.Daikichi2.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Daikichi2.models.Expense;

@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Long> {

};
