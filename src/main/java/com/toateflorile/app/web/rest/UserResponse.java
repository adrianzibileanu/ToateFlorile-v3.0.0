package com.toateflorile.app.web.rest;

import com.toateflorile.app.domain.User;
import com.toateflorile.app.repository.UserRepository;
import jakarta.validation.Valid;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/")
public class UserResponse {

  @Autowired
  private UserRepository userRepository;

  @GetMapping("users")
  public List<User> getUsers(){
    Sort sortByNameDesc = Sort.by(Sort.Direction.DESC, "username");
    return userRepository.findAll(sortByNameDesc);
  }

  @GetMapping("users/{username}")
  public ResponseEntity<User> getUser(@Valid @PathVariable("username") String username){
    return userRepository.findByUsername(username).map(user -> ResponseEntity.ok().body(user)).orElse(ResponseEntity.notFound().build());
  }


}
