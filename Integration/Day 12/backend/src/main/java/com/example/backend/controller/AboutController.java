package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.About;

import com.example.backend.service.AboutService;


import lombok.RequiredArgsConstructor;



@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/about")	
public class AboutController {

     @Autowired
	private AboutService service;

  


    @GetMapping("/get/{id}")
	public Optional<About> getAbout(@PathVariable int id){
		return service.getById(id);
	}

      @PostMapping("/save")
	public String addAbout(@RequestBody About about)
	{
		return service.addAbout(about);
	}
    @PutMapping("/put/{id}")
	public About updateAbout(@PathVariable int id, @RequestBody About about) 
	{
	        return service.updateAbout(id,about);
	        
    }

}
