package com.project.project.components.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.project.components.Model.Offerings;


public interface OfferingRepoInt extends JpaRepository<Offerings,Integer> {
    
}
