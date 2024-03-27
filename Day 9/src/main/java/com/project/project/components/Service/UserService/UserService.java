package com.project.project.components.Service.UserService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.project.auth.EncryptPassword.UserPasswordEncryptor;
import com.project.project.components.Model.User;
import com.project.project.components.Repository.UserRepoInt;


@Service
public class UserService implements UserServiceInt {
    @Autowired
    UserRepoInt uri;

    @Override
    public Optional<User> getDetails(int u_id) {
        return uri.findById(u_id);
    }

    @Override
    public List<User> getAllUsers() {
        return uri.findAll();
    }

    @Override
    public String getLoginDetails(String email, String password) {
        User user = uri.findByEmail(email).get();
        if (user != null) {
            if (user.getPassword().equals(password)) {
                return "Successful Login";
            } else {
                return "Incorrect Password";
            }
        } else {
            return "Invalid Email Details";
        }

    }

    @Override
    public String getEmailDetails(String email) {
        Optional<User> userOptional = uri.findByEmail(email);
        if (userOptional.isPresent()) {
            return "Already Registered Email";
        } else {
            return "New Email";
        }
    }

    public User findUser(String email) {
        User user = uri.findByEmail(email).get();
        return user;
      }


    @Override
    public String postDetails(User u) {
        uri.save(u);
        return "Saved successfully";
    }

    @Override
    public String deleteUser(int u_id) {
        uri.deleteById(u_id);
        return "Deleted Successfully";
    }

    @Override
    public String updateUser(User u) {
        uri.save(u);
        return "Updated Successfully";
    }

    @Override
    public User updatePassword(String email, String password) {
        User u = uri.findByEmail(email).get();
        String encryptedPassword = UserPasswordEncryptor.encryptPassword(password);
        u.setPassword(encryptedPassword);
        uri.save(u);
        return u;
    }

}
