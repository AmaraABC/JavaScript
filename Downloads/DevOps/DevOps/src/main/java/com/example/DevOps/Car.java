package com.example.DevOps;

public class Car {
   private String brand;
   private String plateNumber;
   private String price;

    public Car(String brand) {
        this.brand = brand;
    }

    public Car(String brand, String plateNumber, String price) {
        this.brand = brand;
        this.plateNumber = plateNumber;
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getPlateNumber() {
        return plateNumber;
    }

    public void setPlateNumber(String plateNumber) {
        this.plateNumber = plateNumber;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
