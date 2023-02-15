package com.toateflorile.app.domain;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.Set;

@Document(collection = "flrs") //flrs = users
public class User {

  @Id
  private String id;

  @NotNull
  @Size(max = 20)
  private String username;

  @NotNull
  @Size(max = 50)
  private String email;

  @NotNull
  @Size(max = 120)
  private String password;



  @DBRef
  private Set<TFRole> roles = new HashSet<>();

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<TFRole> getRoles() {
    return roles;
  }

  public void setRoles(Set<TFRole> roles) {
    this.roles = roles;
  }

  public User(String id, String username, String email, String password) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }

}
