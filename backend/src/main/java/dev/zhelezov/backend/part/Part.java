package dev.zhelezov.backend.part;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import dev.zhelezov.backend.car.Car;
import dev.zhelezov.backend.manufacturer.Manufacturer;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "parts")
public class Part {
    @Id
    @GeneratedValue
    private UUID id;

    private String name;
    private String code;

    @Enumerated(EnumType.STRING)
    private PartCategory category;

    @ManyToMany
    @JoinTable(
        name = "part_car_compatibility",
        joinColumns = @JoinColumn(name = "part_id"),
        inverseJoinColumns = @JoinColumn(name = "car_id")
    )
    private List<Car> supportedCars = new ArrayList<>();

    private float buyPrice;
    private float sellPrice;

    @ManyToOne
    @JoinColumn(name = "manufacturer_id")
    private Manufacturer manufacturer;

    // Constructors, getters, setters
}