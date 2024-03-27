package com.project.project.EmailHandler.OtpService;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class OtpService {

  @Autowired
  private JavaMailSender javaMailSender;

  public String sendOtpEmailForSignUp(String recipientEmail, String username, String otp)
      throws MessagingException, IOException {
    MimeMessage message = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true);
    helper.setTo(recipientEmail);
    helper.setSubject("Verify your Email");

    // Load the email template
    Resource resource = new ClassPathResource("templates/verifyEmail.html");
    String content = new String(FileCopyUtils.copyToByteArray(resource.getInputStream()), StandardCharsets.UTF_8);

    // Replace placeholders in the email template
    content = content.replace("[Name]", username);
    content = content.replace("[OTP]", otp);

    helper.setText(content, true);

    // Send the email
    javaMailSender.send(message);

    return otp;
  }

  public String sendOtpforgotPassword(String recipientEmail, String otp)
      throws MessagingException, IOException {
    MimeMessage message = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true);
    helper.setTo(recipientEmail);
    helper.setSubject("Reset your password");

    // Load the email template
    Resource resource = new ClassPathResource("templates/forgotPassword.html");
    String content = new String(FileCopyUtils.copyToByteArray(resource.getInputStream()), StandardCharsets.UTF_8);

    content = content.replace("[Name]", recipientEmail);
    content = content.replace("[OTP]", otp);

    helper.setText(content, true);

    // Send the email
    javaMailSender.send(message);

    return otp;
  }
}