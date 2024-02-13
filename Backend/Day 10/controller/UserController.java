package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.User;
import com.example.backend.service.AuthenticationService;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/user")	
public class UserController {


    @Autowired
	private AuthenticationService service;

	@GetMapping("/get")
	public List<User> getUsers(){
		return service.getAllUsers();
	}
	
	@GetMapping("/get/{email}")
	public User getUserByEmail(@PathVariable String email){
		return service.getUserByEmail(email);
	}
	

}
