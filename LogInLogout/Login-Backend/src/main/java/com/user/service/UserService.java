package com.user.service;

import com.user.entity.User;

public interface UserService {
	
	public String registerUser(User user);
	public String loginUser(String email , String password);

}
