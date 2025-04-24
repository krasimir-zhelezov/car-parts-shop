package dev.zhelezov.backend.car;


import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, UUID> {
    List<Car> findAll();
}