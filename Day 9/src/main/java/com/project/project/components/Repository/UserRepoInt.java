package com.project.project.components.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.project.components.Model.User;

@Repository
public interface UserRepoInt extends JpaRepository<User,Integer>{
    Optional<User> findByEmail(String email);
    Optional<User> findByPassword(String password);
}
