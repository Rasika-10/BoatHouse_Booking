package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.About;
import com.example.backend.model.BoatDetails;
import com.example.backend.repository.AboutRepo;
import jakarta.persistence.EntityNotFoundException;

@Service
public class AboutService {

    @Autowired
	AboutRepo repo;

	public Optional<About> getById(int id) {
		return repo.findById(id);
	}
 
     @SuppressWarnings("null")
	public String addAbout(About about) {
		repo.save(about);
		return "About us content added successfully!!";
	}
    
    public About updateAbout(int id,About about) {
		Optional<About> existingAboutOptional = repo.findById(id);

		if (existingAboutOptional.isPresent()) {
			About existingAbout = existingAboutOptional.get();
			existingAbout.setText(about.getText());
			
			existingAbout.setHeading(about.getHeading());
			
			existingAbout.setText1(about.getText1());
			
			
			
			
			return repo.save(existingAbout);
		} else {
			throw new EntityNotFoundException("Content not found with ID: " + id);
		}
	}

}
