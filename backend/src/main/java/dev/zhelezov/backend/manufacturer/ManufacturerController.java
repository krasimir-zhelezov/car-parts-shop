package dev.zhelezov.backend.manufacturer;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;



@RestController
@RequestMapping("/api/manufacturers")
@Tag(name = "Manufacturer API")
public class ManufacturerController {
    
    private final ManufacturerService manufacturerService;

    public ManufacturerController(ManufacturerService manufacturerService) {
        this.manufacturerService = manufacturerService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Manufacturer>> getAllManufacturers() {
        List<Manufacturer> manufacturers = manufacturerService.getAllManufacturers();
        return ResponseEntity.ok().body(manufacturers);
    }

    @PostMapping("/")
    public ResponseEntity<Manufacturer> createManufacturer(@Valid @RequestBody ManufacturerCreateDto dto) {
        Manufacturer manufacturer = manufacturerService.createManufacturer(dto);
        
        return ResponseEntity.ok().body(manufacturer);
    }
    
    
}
