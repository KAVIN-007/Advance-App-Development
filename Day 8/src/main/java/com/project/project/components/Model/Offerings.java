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

@Table(name="_offerings")
public class Offerings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="o_id")
    private int o_id;

    @Column(name="o_name")
    private String o_name;

    @Column(name="o_photo")
    private String o_photo;

    @Column(name="o_price")
    private int o_price;
    
    @Column(name="o_category")
    private String o_category;
}
