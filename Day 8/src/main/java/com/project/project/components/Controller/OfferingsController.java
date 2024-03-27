package com.project.project.components.Controller;

import java.util.Optional;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.project.project.components.Model.Offerings;
import com.project.project.components.Service.OfferingsService.OfferingsService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin("*")
@RestController
public class OfferingsController {
    @Autowired
    private OfferingsService offeringsService;

    @GetMapping("/getOffering/{o_id}")
    public Optional<Offerings> getOfferings(@PathVariable int o_id) {
        return offeringsService.getOfferings(o_id);
    }

    @GetMapping("/getAllOfferings")
    public List<Offerings> getAllOfferings() {
        return offeringsService.getAllOfferings();
    }

    @PostMapping("/addOffering")
    public String addNewOffering(@RequestBody Offerings offerings) {
        return offeringsService.postOfferings(offerings);
    }

    @DeleteMapping("/deleteOffering/{o_id}")
    public String DeleteOffering(@PathVariable int o_id) {
        return offeringsService.deleteOffering(o_id);
    }

    @PutMapping("/updateOffering/{o_id}")
    public Optional<Offerings> UpdateOffering(@PathVariable int o_id, @RequestBody Offerings offerings) {
        return offeringsService.updateOffering(o_id, offerings);
    }
}
