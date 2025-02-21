package com.user.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.user.entity.User;
import com.user.repository.UserRepository;

import jakarta.transaction.Transactional;
@Service
public class UserServiceImplementation implements UserService{
	@Autowired
	private UserRepository repo;
	@Autowired
	private PasswordEncoder encode;
	@Autowired
	private AuthenticationManager authManager;
    @Transactional
	@Override
	public String registerUser(User user) {
	    if(repo.existsByEmail(user.getEmail())) {
	        return "Email Already Exist";
	    }
	    user.setPassword(encode.encode(user.getPassword()));
	    user = repo.save(user);  // Save user to the database
	    System.out.println("User saved: " + user);  // Check if user is saved
	    return "User Registered Successfully";
	}
    @Override
    public String loginUser(String email, String password) {
       
        if (!repo.existsByEmail(email)) {
            return "User Not Found";
        }

       
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password)
        );

     
        if (authentication.isAuthenticated()) {
            return "Login Successful";
        } else {
            return "Invalid Credentials";
        }
    }

}
