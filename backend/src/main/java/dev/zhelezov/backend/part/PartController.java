package dev.zhelezov.backend.part;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
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
}
