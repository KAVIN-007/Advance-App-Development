package com.project.project.components.Service.UserService;

import java.util.List;
import java.util.Optional;

import com.project.project.components.Model.User;

public interface UserServiceInt {
    
    public Optional<User> getDetails(int u_id);
    public String getLoginDetails(String email, String password);
    public String getEmailDetails(String email);
    public List<User> getAllUsers();
    public String postDetails(User u);
    public String deleteUser(int u_id);
    public String updateUser(User u);
    public User updatePassword(String email, String password);
}
