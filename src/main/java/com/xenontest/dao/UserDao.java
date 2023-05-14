package com.xenontest.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.xenontest.model.User;

public interface UserDao extends JpaRepository<User,Integer> {
	public User findByEmailAndType(String email,String type);




}
