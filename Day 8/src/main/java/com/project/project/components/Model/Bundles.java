package com.project.project.components.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Table(name="_bundles")
public class Bundles {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="b_id")
    private int b_id;

    @Column(name="b_name")
    private String b_name;

    @Column(name="b_photo")
    private String b_photo;

    @Column(name="b_price")
    private int b_price;
    
    @Column(name="b_category")
    private String b_category;
}
