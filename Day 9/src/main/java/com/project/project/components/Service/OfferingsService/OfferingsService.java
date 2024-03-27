package com.project.project.components.Service.OfferingsService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.project.components.Model.Offerings;
import com.project.project.components.Repository.OfferingRepoInt;

@Service
public class OfferingsService implements OfferingsServiceInt {
    @Autowired
    OfferingRepoInt offeringRepo;

    @Override
    public Optional<Offerings> getOfferings(int o_id) {
        return offeringRepo.findById(o_id);
    }

    @Override
    public List<Offerings> getAllOfferings() {
        return offeringRepo.findAll();
    }

    @Override
    public String postOfferings(Offerings offerings) {
        offeringRepo.save(offerings);
        return "Saved successfully";
    }

    @Override
    public String deleteOffering(int o_id) {
        offeringRepo.deleteById(o_id);
        return "Deleted Successfully";
    }

    @Override
public Optional<Offerings> updateOffering(int o_id, Offerings offerings) {
    Optional<Offerings> optionalOffering = offeringRepo.findById(o_id);
    if (optionalOffering.isPresent()) {
        Offerings existingOffering = optionalOffering.get();

        if (offerings.getO_name() != null) {
            existingOffering.setO_name(offerings.getO_name());
        }
        if (offerings.getO_photo() != null) {
            existingOffering.setO_photo(offerings.getO_photo());
        }
        if (offerings.getO_price() != 0) {
            existingOffering.setO_price(offerings.getO_price());
        }
        if (offerings.getO_category() != null) {
            existingOffering.setO_category(offerings.getO_category());
        }

        offeringRepo.save(existingOffering);
        return Optional.of(existingOffering);
    } else {
        return Optional.empty(); 
    }
}



}