package com.codingDojo.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.codingDojo.model.LoginUser;
import com.codingDojo.model.User;
import com.codingDojo.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;
    
    // TO-DO: Write register and login methods!
    public User register(User newUser, BindingResult result) {
        // TO-DO: Additional validations!
    	// TO-DO - Reject values or register if no errors:
    	
    	if(userRepo.findByEmail(newUser.getEmail()).isPresent()) {
    		result.rejectValue("email", "Unique", "You can't use this email. You a diff one");
    	}
        
        if(!newUser.getPassword().equals(newUser.getConfirm())) {
    		result.rejectValue("confirm", "Matches", "Your pass and confirm pass no match");

        }
        
        if(result.hasErrors()) return null;
    
        String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
        newUser.setPassword(hashed);
        
        return userRepo.save(newUser);
        
    }
    public User login(LoginUser newLogin, BindingResult result) {
        // TO-DO: Additional validations!
// TO-DO - Reject values:
        
    	// Find user in the DB by email
        // Reject if NOT present
        Optional<User>potentialUser = userRepo.findByEmail(newLogin.getEmail());
        
        if(!potentialUser.isPresent()) {
        	result.rejectValue("email", "Unique", "Email does not exist in database");
        	return null;
        }
        
        User user = potentialUser.get();
        // Reject if BCrypt password match fails
    
        if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
        	result.rejectValue("password", "Matches", "That pass don't match the recorded pass");
        	return null;
        }
        // Return null if result has errors
        // Otherwise, return the user object
        if(result.hasErrors()) return null;
        
        else return user;
    }
}
