package com.toateflorile.app;

import jakarta.annotation.Resource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class ToateFlorileApplication {
	public static void main(String[] args) {
		SpringApplication.run(ToateFlorileApplication.class, args);
	}

}
