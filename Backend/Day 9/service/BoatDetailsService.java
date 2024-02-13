package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.BoatDetails;
import com.example.backend.repository.BoatDetailsRepo;

import jakarta.persistence.EntityNotFoundException;

@Service
public class BoatDetailsService {

    @Autowired
	BoatDetailsRepo repo;

	public List<BoatDetails> getBoat() {
		return repo.findAll();
	}
	
	


	
	@SuppressWarnings("null")
	public String addBoat(BoatDetails boatdetails) {
		repo.save(boatdetails);
		return "Added";
	}
    

	public BoatDetails updateBoat(int id,BoatDetails boatDetails) {
		Optional<BoatDetails> existingBoatOptional = repo.findById(id);

		if (existingBoatOptional.isPresent()) {
			BoatDetails existingBoat = existingBoatOptional.get();
			existingBoat.setTitle(boatDetails.getTitle());
			existingBoat.setBoatType(boatDetails.getBoatType());
			existingBoat.setDistance(boatDetails.getDistance());
			existingBoat.setFacilities(boatDetails.getFacilities());
			existingBoat.setCancelOp(boatDetails.getCancelOp());
			existingBoat.setFood(boatDetails.getFood());
			existingBoat.setAc(boatDetails.getAc());
			existingBoat.setRating(boatDetails.getRating());
			existingBoat.setPrice(boatDetails.getPrice());
			existingBoat.setCapacity(boatDetails.getCapacity());
			existingBoat.setTime(boatDetails.getTime());
			existingBoat.setImageUrl(boatDetails.getImageUrl());
			
			
			return repo.save(existingBoat);
		} else {
			throw new EntityNotFoundException("Candidate not found with ID: " + id);
		}
	}

	public String deleteBoatById(int id) {
		repo.deleteById(id);
		return "Deleted!!..";
	}
	public Optional<BoatDetails> getById(int boatId) {
		return repo.findById(boatId);
	}
	// public Optional<BoatDetails> getByTitle(String title) {
	// 	return repo.findByTitle(title);
	// }




	
}
