package dev.zhelezov.backend.manufacturer;

import jakarta.validation.constraints.NotBlank;

public class ManufacturerUpdateDto {
    
    @NotBlank
    private String name;

    @NotBlank
    private String country;

    @NotBlank
    private String address;

    @NotBlank
    private String phoneNumber;

    private String fax;

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
}
