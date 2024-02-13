package com.example.backend.model;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class BoatDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String  title;
    private String boatType;
    private String distance;
    private String facilities;
    private String cancelOp;
    private String food;
    private String  ac;
    private int  rating;
    private String price;
    private String capacity;
	private String time;
	private String imageUrl;

    

   
    
   
    
 
    
    

}