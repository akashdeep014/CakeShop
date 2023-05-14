package com.xenontest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.xenontest.dao.UserDao;
import com.xenontest.model.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;
	
	@Override
	public void add(User user) {
		userDao.save(user);
		
	}



	@Override
	public User getByCredential(String email, String type) {
	User user =userDao.findByEmailAndType(email,type);
		return user;
	}

	


}
