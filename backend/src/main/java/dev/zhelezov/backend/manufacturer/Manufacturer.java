package dev.zhelezov.backend.manufacturer;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import dev.zhelezov.backend.part.Part;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "manufacturer")
public class Manufacturer {
    @Id
    @GeneratedValue
    private UUID id;

    private String name;
    private String country;
    private String address;
    private String phoneNumber;
    private String fax;
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
    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getFax() {
        return fax;
    }
    public void setFax(String fax) {
        this.fax = fax;
    }

    // @OneToMany(
    //     mappedBy = "manufacturer",
    //     cascade = CascadeType.ALL,
    //     orphanRemoval = true
    // )
    // private Set<Part> parts = new HashSet<>();

    // Constructors, getters, setters
    
    // Helper methods
    // public void addPart(Part part) {
    //     parts.add(part);
    //     part.setManufacturer(this);
    // }

    // public void removePart(Part part) {
    //     parts.remove(part);
    //     part.setManufacturer(null);
    // }

    
}