package com.xenontest.service;


import java.util.List;

import com.xenontest.model.User;

public interface UserService {
	
	void add(User user);

	User getByCredential(String email,String type);

	
}
