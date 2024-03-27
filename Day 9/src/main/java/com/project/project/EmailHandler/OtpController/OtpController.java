package com.project.project.EmailHandler.OtpController;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.project.EmailHandler.OtpService.OtpService;
import com.project.project.components.Model.User;
import com.project.project.components.Repository.UserRepoInt;

@RestController
@CrossOrigin("*")
public class OtpController {
    @Autowired
    private UserRepoInt userrepo;

    @Autowired
    private OtpService otpservice;

    @GetMapping("/otpcontroller")
    public String getOtpController() {
        return "welcome otp controller";
    }

    @PostMapping("/signup/sendotp")
    public ResponseEntity<?> sendOtpForSignUp(@RequestParam("email") String email,
            @RequestParam("username") String username) throws IOException {
        Optional<User> storedUser = userrepo.findByEmail(email);
        if (storedUser.isPresent()) {
            return new ResponseEntity<>("Already Registered Email", HttpStatus.OK);
        }
        try {
            String otp = generateRandomOtp();
            String emailotp = otpservice.sendOtpEmailForSignUp(email, username, otp);
            System.out.println(emailotp);
            return ResponseEntity.ok().body(emailotp);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send OTP");
        }
    }

    @PostMapping("/forgotpassword/sendotp")
    public ResponseEntity<?> sendOtpForVerify(@RequestParam("email") String email) throws IOException {
        Optional<User> storedUser = userrepo.findByEmail(email);
        if (!storedUser.isPresent()) {
            return new ResponseEntity<>("Email is not registered", HttpStatus.OK);
        }
        try {
            String otp = generateRandomOtp();
            String emailotp = otpservice.sendOtpforgotPassword(email, otp);
            System.out.println(emailotp);
            return ResponseEntity.ok().body(emailotp);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send OTP");
        }
    }

    private String generateRandomOtp() {
        return String.valueOf((int) (Math.random() * 900000) + 100000);
    }
}
