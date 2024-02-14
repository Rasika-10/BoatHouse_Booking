package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.BoatDetails;
import com.example.backend.model.Contactus;
import com.example.backend.repository.BoatDetailsRepo;
import com.example.backend.repository.ContactusRepo;


@Service
public class ContactusService {
    @Autowired
	ContactusRepo repo;

	public List<Contactus> getContact() {
		return repo.findAll();
	}
	
	
	@SuppressWarnings("null")
	public String addContact(Contactus contact) {
		repo.save(contact);
		return "Contact added successfully!!";
	}

}
