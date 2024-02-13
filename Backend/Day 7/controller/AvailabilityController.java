package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Booking;
import com.example.backend.repository.BookingRepo;

import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/availability")
public class AvailabilityController {

    @Autowired
    private BookingRepo bookingRepository;

   
    @GetMapping("/check")
    public ResponseEntity<AvailabilityResponse> checkAvailability(
            @RequestParam String boatName,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {

        List<Booking> overlappingBookings = bookingRepository.findOverlappingBookings(boatName, startDate, endDate);

        boolean available = overlappingBookings.isEmpty();
        
        AvailabilityResponse response = new AvailabilityResponse(available);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // Custom response class for availability check
    private static class AvailabilityResponse {
        private boolean available;

        public AvailabilityResponse(boolean available) {
            this.available = available;
        }

        public boolean isAvailable() {
            return available;
        }
    }
}
