package dev.zhelezov.backend.manufacturer;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ManufacturerRepository extends JpaRepository<Manufacturer, UUID> {
    List<Manufacturer> findAll();
    Optional<Manufacturer> findById(UUID id);
}
