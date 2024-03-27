package com.project.project.components.Service.BundlesService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.project.components.Model.Bundles;
import com.project.project.components.Repository.BundleRepoInt;

@Service
public class BundlesService implements BundlesServiceInt {
    @Autowired
    BundleRepoInt bundleRepoInt;

    @Override
    public Optional<Bundles> getBundles(int b_id) {
        return bundleRepoInt.findById(b_id);
    }

    @Override
    public List<Bundles> getAllBundles() {
        return bundleRepoInt.findAll();
    }

    @Override
    public String postBundles(Bundles bundles) {
        bundleRepoInt.save(bundles);
        return "Saved successfully";
    }

    @Override
    public String deleteBundle(int b_id) {
        bundleRepoInt.deleteById(b_id);
        return "Deleted Successfully";
    }

    @Override
public Optional<Bundles> updateBundle(int b_id, Bundles bundles) {
    Optional<Bundles> optionalBundle = bundleRepoInt.findById(b_id);
    if (optionalBundle.isPresent()) {
        Bundles existingBundle = optionalBundle.get();

        if (bundles.getB_name() != null) {
            existingBundle.setB_name(bundles.getB_name());
        }
        if (bundles.getB_photo() != null) {
            existingBundle.setB_photo(bundles.getB_photo());
        }
        if (bundles.getB_price() != 0) {
            existingBundle.setB_price(bundles.getB_price());
        }
        if (bundles.getB_category() != null) {
            existingBundle.setB_category(bundles.getB_category());
        }

        bundleRepoInt.save(existingBundle);
        return Optional.of(existingBundle);
    } else {
        return Optional.empty(); 
    }
}



}