package io.github.pavanbobade01.HireHunt.controller;

import io.github.pavanbobade01.HireHunt.dto.AuthRequest;
import io.github.pavanbobade01.HireHunt.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3001") // allow React dev server
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthRequest request) {
        try {
            String token = authService.register(request);
            return ResponseEntity.ok(Map.of(
                    "token", token,
                    "role", request.getRole()
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of(
                    "message", "Registration failed",
                    "error", e.getMessage()
            ));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        try {
            String token = authService.authenticate(request);
            String role = authService.getUserRole(request.getEmail());
            return ResponseEntity.ok(Map.of(
                    "token", token,
                    "role", role
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                    Map.of("message", "Invalid credentials")
            );
        }
    }
}
