package com.Daikichi2;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FruityLoopController {
	

	
	
	@RequestMapping("")
	public String index(Model model) {
		Item i1 = new Item("Kiwi", 1.2);
		Item i2 = new Item("Apple", 1.9);
		Item i3 = new Item("Orange", 2.1);
		
		ArrayList<Item> fruit = new ArrayList<Item>();
		fruit.add(i1);
		fruit.add(i3);
		fruit.add(i2);
		model.addAttribute("items", fruit);
		return "index"; 
	}
};
