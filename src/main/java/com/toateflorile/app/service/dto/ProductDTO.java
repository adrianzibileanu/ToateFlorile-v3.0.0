package com.toateflorile.app.service.dto;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.annotation.Id;

import java.io.Serializable;
import java.util.Objects;

public class ProductDTO implements Serializable {

  @Id
  private String id;

  @NotNull
  private String title;

  @NotNull
  private String description;

  @NotNull
  private byte[] image;

  @NotNull
  private int price;

  @NotNull
  private int units;

  @NotNull
  private String category;

  @NotNull
  boolean isInStock;

  private int size;

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof ProductDTO)) {
      return false;
    }

    ProductDTO productDTO = (ProductDTO) o;
    if (this.id == null) {
      return false;
    }
    return Objects.equals(this.id, productDTO.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id);
  }

  @Override
  public String toString() {
    return super.toString();
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public byte[] getImage() {
    return image;
  }

  public void setImage(byte[] image) {
    this.image = image;
  }

  public int getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  public int getUnits() {
    return units;
  }

  public void setUnits(int units) {
    this.units = units;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public boolean isInStock() {
    return isInStock;
  }

  public void setInStock(boolean inStock) {
    isInStock = inStock;
  }

  public int getSize() {
    return size;
  }

  public void setSize(int size) {
    this.size = size;
  }


}
