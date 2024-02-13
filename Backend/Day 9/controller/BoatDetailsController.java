package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.BoatDetails;
import com.example.backend.service.BoatDetailsService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;






@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/boat")	
public class BoatDetailsController {


    @Autowired
	private BoatDetailsService service;

    @GetMapping("/get")
	public List<BoatDetails> getBoat(){
		return service.getBoat();
	}
    
    @PostMapping("/save")
	public String addBoat(@RequestBody BoatDetails boatdetails)
	{
		return service.addBoat(boatdetails);
	}
    

	@PutMapping("/put/{id}")
	public BoatDetails updateBoat(@PathVariable int id, @RequestBody BoatDetails boatDetails) 
	{
	        return service.updateBoat(id,boatDetails);
	        
    }
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id)
	{
		return  service.deleteBoatById(id);
	}
	
	@GetMapping("/get/{id}")
	public Optional<BoatDetails> get(@PathVariable int id)
	{
		return service.getById(id);
	}
	// @GetMapping("/get/{title}")
	// public Optional<BoatDetails> get(@RequestParam String title)
	// {
	// 	return service.getByTitle(title);
	// }
    
    

    
    
}
