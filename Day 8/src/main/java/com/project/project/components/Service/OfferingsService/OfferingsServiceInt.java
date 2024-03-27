package com.project.project.components.Service.OfferingsService;

import java.util.List;
import java.util.Optional;

import com.project.project.components.Model.Offerings;

public interface OfferingsServiceInt {
    public Optional<Offerings> getOfferings(int o_id);

    public List<Offerings> getAllOfferings();

    public String postOfferings(Offerings offerings);

    public String deleteOffering(int o_id);

    public Optional<Offerings> updateOffering(int o_id, Offerings offerings);
}
