package dev.zhelezov.backend.part;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class PartService {

    private final PartRepository partRepository;
    private final ModelMapper modelMapper;

    public PartService(PartRepository partRepository, ModelMapper modelMapper) {
        this.partRepository = partRepository;
        this.modelMapper = modelMapper;
    }

    public List<Part> getAllParts() {
        return partRepository.findAll();
    }

    public Part createPart(PartCreateDto dto) {
        Part part = modelMapper.map(dto, Part.class);
        return partRepository.save(part);
    }

    public Optional<Part> getPartById(UUID id) {
        return partRepository.findById(id);
    }

    public boolean deleteCarById(UUID id) {
        if (partRepository.existsById(id)) {
            partRepository.deleteById(id);
            return true;
        }

        return false;
    }
}
