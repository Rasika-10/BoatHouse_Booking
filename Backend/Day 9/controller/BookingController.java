package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.backend.model.Booking;

import com.example.backend.service.BookingService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
	private BookingService service;

  


    @GetMapping("/get")
	public List<Booking> getBooking(){
		return service.getBooking();
	}
    
    @GetMapping("/bookedDates")
    public ResponseEntity<List<String>> getBookedDates(@RequestParam String boatName) {
        try {
            List<String> bookedDates = service.findBookedDatesByBoatName(boatName);
            return ResponseEntity.ok(bookedDates);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveBooking(@RequestBody Booking booking) {
        try {
            service.saveBooking(booking);
            return ResponseEntity.ok("Booking saved successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save booking");
        }
    }

	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id)
	{
		return  service.deleteBoatById(id);
	}
}
