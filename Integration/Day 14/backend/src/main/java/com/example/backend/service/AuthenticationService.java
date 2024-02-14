package com.example.backend.service;


import java.util.List;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.dto.request.AuthenticationRequest;
import com.example.backend.dto.request.RegisterRequest;
import com.example.backend.dto.request.UserRequest;
import com.example.backend.dto.response.AuthenticationResponse;
import com.example.backend.model.BoatDetails;
import com.example.backend.model.Role;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
   
    public AuthenticationResponse register(RegisterRequest request) {
        var user = User
                .builder()
                .name(request.getName())
                .email(request.getEmail())
                .number(request.getNumber())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .email(user.getEmail()) 
                .id(user.getId())
                .token(jwtToken)
                .build();
    }


    public List<User> getAllUsers() {
            return userRepository.findAll();
    }
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
   
//     public User getUserByEmail(String email) {
    
//             return userRepository.findByEmail(email).get();
//     }




        public void updateUserDetails(Long id, UserRequest request) {
                User user = userRepository.findById(id)
                        .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
        
                if (request.getName() != null) {
                    user.setName(request.getName());
                }
                if (request.getEmail() != null) {
                    user.setEmail(request.getEmail());
                }
                if (request.getNumber() != null) {
                    user.setNumber(request.getNumber());
                }
        
                userRepository.save(user);
            }


}
