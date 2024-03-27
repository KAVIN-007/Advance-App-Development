package com.project.project.components.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.project.components.Model.Bundles;
import com.project.project.components.Service.BundlesService.BundlesService;

@CrossOrigin("*")
@RestController
public class BundlesController {
    @Autowired
    private BundlesService bundlesService;

    @GetMapping("/getBundle/{b_id}")
    public Optional<Bundles> getBundles(@PathVariable int b_id) {
        return bundlesService.getBundles(b_id);
    }

    @GetMapping("/getAllBundles")
    public List<Bundles> getAllBundles() {
        return bundlesService.getAllBundles();
    }

    @PostMapping("/addBundle")
    public String addNewBundle(@RequestBody Bundles bundles) {
        return bundlesService.postBundles(bundles);
    }

    @DeleteMapping("/deleteBundle/{b_id}")
    public String DeleteBundle(@PathVariable int b_id) {
        return bundlesService.deleteBundle(b_id);
    }

    @PutMapping("/updateBundle/{b_id}")
    public Optional<Bundles> UpdateBundle(@PathVariable int b_id, @RequestBody Bundles bundles) {
        return bundlesService.updateBundle(b_id, bundles);
    }
}
