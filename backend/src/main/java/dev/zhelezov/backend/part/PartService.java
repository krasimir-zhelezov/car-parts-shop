package dev.zhelezov.backend.part;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import dev.zhelezov.backend.car.Car;
import dev.zhelezov.backend.car.CarRepository;

@Service
public class PartService {

    private final PartRepository partRepository;
    private final CarRepository carRepository;
    private final ModelMapper modelMapper;

    public PartService(PartRepository partRepository, ModelMapper modelMapper, CarRepository carRepository) {
        this.partRepository = partRepository;
        this.carRepository = carRepository;
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

    public Part updatePartById(UUID id, PartUpdateDto dto) {
        return partRepository.findById(id)
        .map(part -> {
            modelMapper.map(dto, part);
            return partRepository.save(part);
        })
        .orElse(null);
    }

    public Part addSupportedCar(UUID partId, UUID carId) {
        Part part = partRepository.findById(partId)
            .orElseThrow(() -> new NoSuchElementException("Part not found"));
        Car car = carRepository.findById(carId)
            .orElseThrow(() -> new NoSuchElementException("Car not found"));

        part.addSupportedCar(car);
        return partRepository.save(part);

    }
}
