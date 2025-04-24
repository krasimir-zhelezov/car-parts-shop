package dev.zhelezov.backend.car;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CarService {
    
    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }
}
