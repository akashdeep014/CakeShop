package com.xenontest.cntl;

import java.util.Map;

import javax.servlet.http.HttpSession;

import com.xenontest.dao.ContactDao;
import com.xenontest.model.ContactForm;
import com.xenontest.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.xenontest.model.User;
import com.xenontest.service.UserService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", allowCredentials = "false")
public class UserController {
	
	private static User usersession;
	@Autowired
	private UserService userv;

	@Autowired
	private ContactService contactService;
	@Autowired
	private ContactDao contactDao;


	@PostMapping(value= {"/addUser"})
	public String addUser(@RequestBody User user)
	{ 
		usersession=user;
		userv.add(user);
		return "success";

	}
	
	@PutMapping(value= {"/addUser"})
	public String updateUser(@RequestBody User user)
	{ 
		
		userv.add(user);
		return "success";

	}
	
	@GetMapping(value= {"/addUser"})
		public String user()
		{
			return "success";
		}
	
	@GetMapping(value= {"/getUserData"})
	public User getUserData(@RequestParam Map<String, String> params,HttpSession session)
	{
		System.out.println(params.get("email"));
		System.out.println(params.get("type"));
		User user =userv.getByCredential(params.get("email"),params.get("type"));
		usersession = user;
		return user ;
	}
	
	@GetMapping(value= {"/getsession"})
	public User getSessionData()
	{

		return usersession;
	
	}
	
	@GetMapping(value= {"/destroysession"})
	public String getDestroySessionData()
	{

		
		usersession = null;
		return "logged out";
	}

    
	@PostMapping(value = {"/addContact"})
	public ResponseEntity<String> addContactData(@RequestBody ContactForm contactForm){


			ContactForm cf =  contactService.addForm(contactForm);

			if(cf == null) {
			return ResponseEntity.badRequest().body("Something went wrong");
		  }

			return ResponseEntity.ok().body("Successfully submitted");
	}

}
