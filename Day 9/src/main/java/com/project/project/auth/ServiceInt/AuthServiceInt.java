package com.project.project.auth.ServiceInt;

import com.project.project.Dto.Request.AuthenticationRequest;
import com.project.project.Dto.Request.UserRegisterRequest;
import com.project.project.Dto.Response.AuthenticationResponse;

public interface AuthServiceInt {
    boolean userRegistration(UserRegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);

}
