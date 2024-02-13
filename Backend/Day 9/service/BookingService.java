package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.backend.model.Booking;

import com.example.backend.repository.BookingRepo;

@Service
public class BookingService {
    
     @Autowired
	BookingRepo repo;

	public List<Booking> getBooking() {
		return repo.findAll();
	}
	
	


	// @SuppressWarnings("null")
	// public String addBooking(Booking booking) {
	// 	repo.save(booking);
	// 	return "Added";
	// }

	@SuppressWarnings("null")
	public String saveBooking(Booking booking) {
        repo.save(booking);
	    return "Added";
    }

    public List<String> findBookedDatesByBoatName(String boatName) {
        return repo.findBookedDatesByBoatName(boatName);
    }
	public String deleteBoatById(int id) {
		repo.deleteById(id);
		return "Deleted!!..";
	}
}
