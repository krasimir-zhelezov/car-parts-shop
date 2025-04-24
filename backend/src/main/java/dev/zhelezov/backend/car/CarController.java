package dev.zhelezov.backend.car;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;



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
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Cars found"),
    })
    public ResponseEntity<List<Car>> getAllCars() {
        List<Car> cars = carService.getAllCars();
        return ResponseEntity.status(HttpStatus.OK).body(cars);
    }
    
    @PostMapping("/")
    public ResponseEntity<Car> createCar(@Valid @RequestBody CarCreateDto carCreateDto) {
        Car car = carService.createCar(carCreateDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(car);
    }
}
