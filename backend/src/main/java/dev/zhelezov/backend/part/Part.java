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

    // @ManyToOne
    // @JoinColumn(name = "manufacturer_id")
    // private Manufacturer manufacturer;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public PartCategory getCategory() {
        return category;
    }

    public void setCategory(PartCategory category) {
        this.category = category;
    }

    public List<Car> getSupportedCars() {
        return supportedCars;
    }

    public void setSupportedCars(List<Car> supportedCars) {
        this.supportedCars = supportedCars;
    }

    public float getBuyPrice() {
        return buyPrice;
    }

    public void setBuyPrice(float buyPrice) {
        this.buyPrice = buyPrice;
    }

    public float getSellPrice() {
        return sellPrice;
    }

    public void setSellPrice(float sellPrice) {
        this.sellPrice = sellPrice;
    }

    public void addSupportedCar(Car car) {
        supportedCars.add(car);
    }

    public void removeSupportedCar(UUID carId) {
        supportedCars.removeIf(car -> car.getId().equals(carId));
    }

    // public Manufacturer getManufacturer() {
    //     return manufacturer;
    // }

    // public void setManufacturer(Manufacturer manufacturer) {
    //     this.manufacturer = manufacturer;
    // }
    
}