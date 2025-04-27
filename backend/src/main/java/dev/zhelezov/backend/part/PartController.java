package dev.zhelezov.backend.part;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;





@RestController
@RequestMapping("/api/parts")
@Tag(name = "Parts API")
public class PartController {
    
    private final PartService partService;

    public PartController(PartService partService) {
        this.partService = partService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Part>> getAllParts() {
        List<Part> parts = partService.getAllParts();
        return ResponseEntity.status(HttpStatus.OK).body(parts);
    }

    @PostMapping("/")
    public ResponseEntity<Part> createPart(@Valid @RequestBody PartCreateDto dto) {
        Part part = partService.createPart(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(part);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Part> getPartById(@PathVariable UUID id) {
        return partService.getPartById(id)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePartById(@PathVariable UUID id) {
        if (partService.deleteCarById(id)) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Part> updatePartById(@PathVariable UUID id, @RequestBody PartUpdateDto dto) {
        Part part = partService.updatePartById(id, dto);
        
        if (part != null) {
            return ResponseEntity.status(HttpStatus.OK).body(part);
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PatchMapping("/{partId}/addSupportedCar/{carId}")
    public ResponseEntity<Part> addSupportedCar(@PathVariable UUID partId, @PathVariable UUID carId) {
        Part part = partService.addSupportedCar(partId, carId);

        return ResponseEntity.ok().body(part);
    }

    @PatchMapping("/{partId}/removeSupportedCar/{carId}")
    public ResponseEntity<Part> removeSupportedCar(@PathVariable UUID partId, @PathVariable UUID carId) {
        Part part = partService.removeSupportedCar(partId, carId);

        return ResponseEntity.ok().body(part);
    }
}
