package com.example.backend.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking,Integer>{

  List<Booking> findByUserEmail(String email);
   
  @Query("SELECT b FROM Booking b WHERE b.boatName = :boatName AND ((b.checkIn BETWEEN :startDate AND :endDate) OR (b.checkOut BETWEEN :startDate AND :endDate))")
    List<Booking> findOverlappingBookings(@Param("boatName") String boatName, @Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
    

    @Query("SELECT b.checkIn FROM Booking b WHERE b.boatName = :boatName")
    List<String> findBookedDatesByBoatName(@Param("boatName") String boatName);

    @Query("SELECT b.boatType, COUNT(b) FROM Booking b GROUP BY b.boatType")
    List<Object[]> countBookingsByBoatType();


}
