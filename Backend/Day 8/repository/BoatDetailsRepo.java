package com.example.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.BoatDetails;

@Repository
public interface BoatDetailsRepo extends JpaRepository<BoatDetails,Integer>{

    // Optional<BoatDetails> findByTitle(String title);
    
}
