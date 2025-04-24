package dev.zhelezov.backend.car;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;


@RestController
@RequestMapping("/api/cars")
@Tag(name = "Car Controller", description = "Operations pertaining for cars")
public class CarController {
    private final CarService carService;
    
    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping("/")
    @Operation(summary = "Gets all cars")
    public List<Car> getAllCars() {
        return carService.getAllCars();
    }
    
}
