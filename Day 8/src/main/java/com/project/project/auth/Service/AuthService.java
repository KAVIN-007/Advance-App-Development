package com.project.project.auth.Service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.project.Dto.Request.AuthenticationRequest;
import com.project.project.Dto.Request.UserRegisterRequest;
import com.project.project.Dto.Response.AuthenticationResponse;
import com.project.project.Enumerate.Role;
import com.project.project.SpringSecurityauth.Util.JwtUtil;
import com.project.project.auth.ServiceInt.AuthServiceInt;
import com.project.project.components.Model.User;
import com.project.project.components.Repository.UserRepoInt;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthService implements AuthServiceInt {


    private final UserRepoInt userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public boolean userRegistration(UserRegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .email(request.getEmail())
                 .password(passwordEncoder.encode(request.getPassword()))
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .u_id(user.getId())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }


}
