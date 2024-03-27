package com.project.project.auth.EncryptPassword;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class UserPasswordEncryptor {
  private static BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

  public static String encryptPassword(String password) {
    return passwordEncoder.encode(password);
  }

  public static boolean matchPassword(String password, String encryptedPassword) {
    return passwordEncoder.matches(password, encryptedPassword);
  }

}