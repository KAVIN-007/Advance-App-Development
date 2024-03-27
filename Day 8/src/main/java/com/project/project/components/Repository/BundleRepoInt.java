package com.project.project.components.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.project.components.Model.Bundles;

public interface BundleRepoInt  extends JpaRepository<Bundles,Integer> {
    
}
