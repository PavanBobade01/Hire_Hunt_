package io.github.pavanbobade01.HireHunt.dto;

import lombok.Data;

@Data
public class AuthRequest {
    private String email;
    private String password;
    private String role; // Add role for signup
}
