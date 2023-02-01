package com.toateflorile.app;

import com.toateflorile.app.service.ProductService;
import jakarta.annotation.Resource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class ToateFlorileApplication {
  @Resource
  ProductService productService;
	public static void main(String[] args) {
		SpringApplication.run(ToateFlorileApplication.class, args);
	}

  /*
  public void run(String...arg)throws Exception{
    productService.deleteAll();
    productService.init();
  }*/
}
