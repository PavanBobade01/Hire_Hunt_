package io.github.pavanbobade01.HireHunt.service;

import io.github.pavanbobade01.HireHunt.dto.AuthRequest;
import io.github.pavanbobade01.HireHunt.entity.User;
import io.github.pavanbobade01.HireHunt.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public String register(AuthRequest request) {
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole()); // Save role
        userRepository.save(user);

        return jwtService.generateToken(user); // Return JWT so frontend can login instantly
    }

    public String authenticate(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));
        return jwtService.generateToken(user);
    }

    public String getUserRole(String email) {
        return userRepository.findByEmail(email)
                .map(User::getRole)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
