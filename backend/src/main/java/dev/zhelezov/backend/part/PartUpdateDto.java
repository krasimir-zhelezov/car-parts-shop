package dev.zhelezov.backend.part;

import jakarta.validation.constraints.NotBlank;

public class PartUpdateDto {
    @NotBlank
    private String name;
    
    @NotBlank
    private String code;

    @NotBlank
    private PartCategory category;

    @NotBlank
    private float buyPrice;

    @NotBlank
    private float sellPrice;

    // @NotBlank
    // private Manufacturer manufacturer;

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
}
