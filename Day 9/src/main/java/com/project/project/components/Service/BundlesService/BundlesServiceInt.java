package com.project.project.components.Service.BundlesService;


import java.util.List;
import java.util.Optional;

import com.project.project.components.Model.Bundles;

public interface BundlesServiceInt {
    public Optional<Bundles> getBundles(int b_id);

    public List<Bundles> getAllBundles();

    public String postBundles(Bundles bundles);

    public String deleteBundle(int b_id);

    public Optional<Bundles> updateBundle(int b_id, Bundles bundles);
}

