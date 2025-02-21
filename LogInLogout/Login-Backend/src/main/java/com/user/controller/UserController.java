package com.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.user.entity.User;
import com.user.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController  
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
    @Autowired
    private UserService userService; 

    @PostMapping("/reg")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        String result = userService.registerUser(user);
        if (result.equals("Email Already Exist")) {
            return ResponseEntity.status(409).body(result); 
        }
        return ResponseEntity.ok(result);
    }
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user){
    	
		return ResponseEntity.ok("Login Successfully");
    	
    }
    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser(HttpServletRequest httRequest , HttpServletResponse httResponse){
    	
    	httRequest.getSession().invalidate();
    	
		return ResponseEntity.ok("Logout SuccessFully");
    	
    }
}
