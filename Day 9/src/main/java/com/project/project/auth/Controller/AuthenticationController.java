package com.project.project.auth.Controller;

import org.apache.coyote.Response;

// import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.project.project.Api.*;
import com.project.project.Dto.Request.AuthenticationRequest;
import com.project.project.Dto.Request.UserRegisterRequest;
import com.project.project.auth.EncryptPassword.UserPasswordEncryptor;
import com.project.project.auth.Service.AuthService;
import com.project.project.components.Model.User;
import com.project.project.components.Service.UserService.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    @GetMapping("/home")
    public String Home() {
        return "Welcome user";
    }

    @PostMapping("/usersignup")
    public ResponseEntity<String> register(@RequestBody UserRegisterRequest request) {
        boolean isRegistered = authService.userRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registered successfully")
                : ResponseEntity.badRequest().body("User already Signed up!");
    }

    @PostMapping("/userlogin")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest request) {
        User storedUser = userService.findUser(request.getEmail());
        if (storedUser != null) {
            if (UserPasswordEncryptor.matchPassword(request.getPassword(), storedUser.getPassword()))
                return ResponseEntity.ok(authService.userAuthentication(request));
        }
        return new ResponseEntity<>("Login Failed", HttpStatus.BAD_REQUEST);
    }
    
    @PutMapping("/updatepassword")
    public ResponseEntity<?> updatePassword(@RequestBody User user) {
        User storedUser = userService.updatePassword(user.getEmail(), user.getPassword());
        if (storedUser == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        } else if (UserPasswordEncryptor.matchPassword(user.getPassword(), storedUser.getPassword())) {
            return new ResponseEntity<>("Unable to update!,It's your previous password", HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok().body("Password updated successfully");
    }
}