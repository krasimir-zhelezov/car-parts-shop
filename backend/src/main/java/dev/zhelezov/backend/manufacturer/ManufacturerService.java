package dev.zhelezov.backend.manufacturer;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class ManufacturerService {
    
    private final ManufacturerRepository manufacturerRepository;
    private final ModelMapper modelMapper;

    public ManufacturerService(ManufacturerRepository manufacturerRepository, ModelMapper modelMapper) {
        this.manufacturerRepository = manufacturerRepository;
        this.modelMapper = modelMapper;
    }

    public List<Manufacturer> getAllManufacturers() {
        return manufacturerRepository.findAll();
    }

    public Manufacturer createManufacturer(ManufacturerCreateDto dto) {
        Manufacturer manufacturer = modelMapper.map(dto, Manufacturer.class);

        return manufacturerRepository.save(manufacturer);
    }

    public Optional<Manufacturer> getManufacturerById(UUID id) {
        return manufacturerRepository.findById(id);
    }

    public Manufacturer updateManufacturerById(UUID id, ManufacturerUpdateDto dto) {
        return manufacturerRepository.findById(id)
            .map(manufacturer -> {
                modelMapper.map(dto, manufacturer);
                return manufacturerRepository.save(manufacturer);
            })
            .orElse(null);
    }
}
