package com.example.backend.model;


import java.time.LocalDate;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Booking {

     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;
    private String boatName;
    private String userName;
    private String userEmail;
    private String contact;
    private LocalDate checkIn;
    private LocalDate checkOut;
    private String idProof;
    
    

    
    
}
