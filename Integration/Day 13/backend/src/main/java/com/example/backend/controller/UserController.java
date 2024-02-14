package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.request.UserRequest;
import com.example.backend.model.BoatDetails;
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

	@GetMapping("/count")
    public int getUsersCount(){
        List<User> users = service.getAllUsers();
        return users.size();
    }
	@GetMapping("/get")
	public List<User> getUsers(){
		return service.getAllUsers();
	}
	
	// @GetMapping("/get/{email}")
	// public User getUserByEmail(@PathVariable String email){
	// 	return service.getUserByEmail(email);
	// }


	@GetMapping("/get/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return service.getUserById(id);
    }
	

	  @PutMapping("/put/{id}")
    public ResponseEntity<String> updateUserDetails(@PathVariable Long id, @RequestBody UserRequest request) {
        service.updateUserDetails(id, request);
        return ResponseEntity.ok("User details updated successfully");
    }
}


