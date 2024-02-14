package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Contactus;

import com.example.backend.service.ContactusService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/contact")	
public class ContactusController {

     @Autowired
	private ContactusService service;
      @GetMapping("/get")
	public List<Contactus> getContact(){
		return service.getContact();
	}
    
    @PostMapping("/save")
	public String addContact(@RequestBody Contactus contact)
	{
		return service.addContact(contact);
	}

}
