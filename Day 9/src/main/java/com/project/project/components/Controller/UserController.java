package com.project.project.components.Controller;

import java.util.Optional;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.project.project.Api.Api;
import com.project.project.components.Model.User;
import com.project.project.components.Service.UserService.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;


@RequestMapping(Api.USER)
@CrossOrigin(value="*")
@RestController
public class UserController {
    @Autowired
    private UserService userService;
    
    @GetMapping("/getUser/{u_id}")
    public Optional<User> getUser(@PathVariable int u_id) {
        return userService.getDetails(u_id);
    }
    @GetMapping("/getLoginDetails/{email}/{password}")
    public String getLoginDetails(@PathVariable String email, @PathVariable String password) {
        String str = userService.getLoginDetails(email, password);
        return str;
    }
    @GetMapping("/getAllUser")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    @GetMapping("/getEmailDetails/{email}")
    public String getEmailDetails(@PathVariable String email) {
        String str = userService.getEmailDetails(email);
        return str;
    }
    @PostMapping("/addUser")
    public String addNewUser(@RequestBody User user) {

        return userService.postDetails(user);
    }
    @DeleteMapping("/deleteUser/{u_id}")
    public String DeleteUser(@PathVariable int u_id) {
        return userService.deleteUser(u_id);
    }
    @PutMapping("/updateUser/{email}/{password}")
    public User UpdatePassword(@PathVariable String email, @PathVariable String password) {        
        return userService.updatePassword(email, password); 
    }
}
