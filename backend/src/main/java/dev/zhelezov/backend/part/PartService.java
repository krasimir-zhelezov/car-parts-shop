package dev.zhelezov.backend.part;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class PartService {
    
    private final PartRepository partRepository;

    public PartService(PartRepository partRepository) {
        this.partRepository = partRepository;
    }

    public List<Part> getAllParts() {
        return partRepository.findAll();
    }
}
