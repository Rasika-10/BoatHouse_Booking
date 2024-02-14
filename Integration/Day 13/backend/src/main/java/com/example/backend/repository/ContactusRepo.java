package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Contactus;

@Repository
public interface ContactusRepo extends JpaRepository<Contactus,Integer> {

}
