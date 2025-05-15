package dev.zhelezov.backend.car;


import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, UUID> {
    List<Car> findAll();
    Optional<Car> findById(UUID id);
    List<Car> findByBrandContainingAndModelContaining(String brand, String model);
    List<Car> findByBrandContainingOrModelContaining(String brand, String model);
    List<Car> findByBrandContaining(String brand);
}