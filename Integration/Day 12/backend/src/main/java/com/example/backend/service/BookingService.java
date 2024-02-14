package com.example.backend.service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.backend.model.Booking;

import com.example.backend.repository.BookingRepo;

@Service
public class BookingService {
    
     @Autowired
	BookingRepo repo;

	public List<Booking> getBooking() {
		return repo.findAll();
	}
	
	public List<Booking> getBookingsByEmail(String email) {
        return repo.findByUserEmail(email);
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

	public Map<String, Long> countBookingsByBoatType() {
        List<Object[]> results = repo.countBookingsByBoatType();
        return results.stream()
                .collect(Collectors.toMap(
                        arr -> (String) arr[0],   // Boat type
                        arr -> (Long) arr[1]));   // Booking count
    }
    public List<String> findBookedDatesByBoatName(String boatName) {
        return repo.findBookedDatesByBoatName(boatName);
    }
	public String deleteBoatById(int id) {
		repo.deleteById(id);
		return "Deleted!!..";
	}
	public long countTotalBookings() {
        return repo.count();
    }



}
