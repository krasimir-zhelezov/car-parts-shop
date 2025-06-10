package dev.zhelezov.backend.car;

import jakarta.validation.constraints.NotBlank;

public class CarCreateDto {
    @NotBlank
    private String brand;
    
    @NotBlank
    private String model;

    @NotBlank
    private int productionYear;

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getProductionYear() {
        return productionYear;
    }

    public void setProductionYear(int productionYear) {
        this.productionYear = productionYear;
    }

}
