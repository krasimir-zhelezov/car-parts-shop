package dev.zhelezov.backend.manufacturer;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PutMapping;


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
    
    @GetMapping("/{id}")
    public ResponseEntity<Manufacturer> getManufacturerById(@PathVariable UUID id) {
        return manufacturerService.getManufacturerById(id)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Manufacturer> updateManufacturerById(@PathVariable UUID id, @RequestBody ManufacturerUpdateDto dto) {
        Manufacturer manufacturer = manufacturerService.updateManufacturerById(id, dto);

        if (manufacturer != null) {
            return ResponseEntity.ok().body(manufacturer);
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteManufacturerById(@PathVariable UUID id) {
        if (manufacturerService.deleteManufacturerById(id)) {
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }
    
}
