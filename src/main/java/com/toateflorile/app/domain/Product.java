package com.toateflorile.app.domain;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="products")
@Getter
@Setter
@ToString
public class Product {

  @Id
  private String id;

  @NotNull
  private String title;

  @NotNull
  private String description;

  @NotNull
  private byte[] image;

  public String getImagePath() {
    return imagePath;
  }

  public void setImagePath(String imagePath) {
    this.imagePath = imagePath;
  }

  @NotNull
  private String imagePath;

  @NotNull
  private int price;

  @NotNull
  private int units;

  @NotNull
  private String category;

  @NotNull
  boolean isInStock;

  private int size;

  public Product(String id, String title, String description, @NotNull byte[] image, int price, int units, String category, boolean isInStock, int size, String imagePath) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.price = price;
    this.units = units;
    this.category = category;
    this.isInStock = isInStock;
    this.size = size;
    this.imagePath = imagePath;
  }
}
