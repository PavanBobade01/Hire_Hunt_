package io.github.pavanbobade01.HireHunt.controller;


import io.github.pavanbobade01.HireHunt.dto.UserDto;
import io.github.pavanbobade01.HireHunt.entity.User;
import io.github.pavanbobade01.HireHunt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDto> registerUser(@RequestBody User user) {
        // Map DTO to entity and vice versa
        User registeredUser = userService.registerUser(user);
        UserDto userDto = new UserDto();
        // Populate DTO fields
        return ResponseEntity.ok(userDto);
    }
}