package dev.zhelezov.backend.car;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class CarService {
    
    private final CarRepository carRepository;
    private final ModelMapper modelMapper;

    public CarService(CarRepository carRepository, ModelMapper modelMapper) {
        this.carRepository = carRepository;
        this.modelMapper = modelMapper;
    }

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Car createCar(CarCreateDto carCreateDto) {
        Car car = modelMapper.map(carCreateDto, Car.class);

        return carRepository.save(car);
    }
    
    public Optional<Car> getCarById(UUID id) {
        return carRepository.findById(id);
    }

    public boolean deleteCarById(UUID id) {
        if (carRepository.existsById(id)) {
            carRepository.deleteById(id);
            return true;
        }

        return false;
    }

    public Car updateCarById(UUID id, CarUpdateDto carDto) {
        Car car = carRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Car not found"));

        modelMapper.map(carDto, car);

        return carRepository.save(car);
    }
}
