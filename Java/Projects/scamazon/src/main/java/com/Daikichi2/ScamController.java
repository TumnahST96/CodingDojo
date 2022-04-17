package com.Daikichi2;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.Daikichi2.models.Item;

@Controller
public class ScamController {
	@RequestMapping("")
	public String index(Model model) {
		
		Item i1 = new Item("Fake Watch", "costs a lotta money",50000.00 );
		Item i2 = new Item("Orange Shoe", "tottaly real",250000.00 );
		Item i3 = new Item("A real Watch", "tottaly fake",30.00 );
		ArrayList<Item> scam_items = new ArrayList<Item>();
		scam_items.add(i1);
		scam_items.add(i2);
		scam_items.add(i3);
		model.addAttribute("items", scam_items);
		return "index";
	}
};
