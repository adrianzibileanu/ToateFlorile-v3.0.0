package com.toateflorile.app.web.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.toateflorile.app.domain.Product;
import com.toateflorile.app.repository.ProductRepository;
import jakarta.servlet.annotation.MultipartConfig;
import net.minidev.json.JSONObject;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.util.List;

@MultipartConfig
@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ProductResponse {

  private final ProductRepository productRepository;
  private final GridFsTemplate gridFsTemplate;
  private final ObjectMapper objectMapper;

  public ProductResponse (ProductRepository productRepository, GridFsTemplate gridFsTemplate, ObjectMapper objectMapper){
    this.productRepository = productRepository;
    this.gridFsTemplate = gridFsTemplate;
    this.objectMapper = objectMapper;
  }

  @PostMapping("/uploads")
  public void handleFileUpload(@RequestParam("image") MultipartFile file) throws IOException {
    ObjectId fileId = gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename());
    System.out.println("File uploaded succesfully: "+file);
  }

  @GetMapping("/products/images/{productId}")
  public ResponseEntity<byte[]> getProductImage(@PathVariable String productId){
    //get the product from the product repository
    Product product = productRepository.findById(productId).orElse((null));
    byte[] image = product.getImage();
    return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(image);
  }

  // CREATE
  @PostMapping("/products")
  public Product createProduct(@RequestParam("image") MultipartFile file, @RequestParam("product") String productJson) {
    Product product;
    try {
      Gson g = new Gson();
      JSONObject json = g.fromJson(productJson, JSONObject.class);
      json.put("image", file.getOriginalFilename());
      json.put("imagePath", file.getOriginalFilename());
      productJson = json.toString();
      product = objectMapper.readValue(productJson, Product.class);
      //Product product = objectMapper.readValue(productJson, Product.class);
      if (file != null) {
        System.out.println("File found"+file);
        byte[] byteArr = file.getBytes();
        product.setImage(byteArr);
      }else{
        System.out.println("File not found"+file);
      }
      return productRepository.save(product);
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  // READ
  @GetMapping("/products")
  public List<Product> getProducts() {
    return productRepository.findAll();
  }


  @GetMapping("/products/{id}")
  public Product getProductById(@PathVariable("id") String id) {
    return productRepository.findById(id).orElse(null);
  }

  // UPDATE
  @PutMapping("/products/{id}")
  public Product updateProduct(@PathVariable("id") String id, @RequestBody Product product) {
    product.setId(id);
    return productRepository.save(product);
  }

  // DELETE
  @DeleteMapping("/products/{id}")
  public void deleteProduct(@PathVariable("id") String id) {
    productRepository.deleteById(id);
  }


}
