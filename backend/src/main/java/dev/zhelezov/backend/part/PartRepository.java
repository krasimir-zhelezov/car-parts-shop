package dev.zhelezov.backend.part;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PartRepository extends JpaRepository<Part, UUID> {
    List<Part> findAll();
    Optional<Part> findById(UUID id);
}
