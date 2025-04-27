package dev.zhelezov.backend.part;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;


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
    
}
