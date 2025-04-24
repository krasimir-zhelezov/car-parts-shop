package dev.zhelezov.backend.car;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    @Operation(summary = "Get all cars")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Cars found"),
    })
    public ResponseEntity<List<Car>> getAllCars() {
        List<Car> cars = carService.getAllCars();
        return ResponseEntity.status(HttpStatus.OK).body(cars);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get car by id")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Car found"),
        @ApiResponse(responseCode = "404", description = "Car not found")
    })
    public ResponseEntity<Car> getMethodName(@PathVariable UUID id) {
        return carService.getCarById(id)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @PostMapping("/")
    public ResponseEntity<Car> createCar(@Valid @RequestBody CarCreateDto carCreateDto) {
        Car car = carService.createCar(carCreateDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(car);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete car by id")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Car deleted"),
        @ApiResponse(responseCode = "404", description = "Car not found")
    })
    public ResponseEntity<Void> deleteCarById(@PathVariable UUID id) {
        if (carService.deleteCarById(id)) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
