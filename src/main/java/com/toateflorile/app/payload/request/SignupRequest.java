package com.toateflorile.app.payload.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.Id;

import java.util.Set;


public class SignupRequest {

  public SignupRequest(String id, String username, String email, Set<String> roles, String password) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.roles = roles;
    this.password = password;
  }

  @Id
  private String id;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  @NotNull
  @Size(min = 3, max = 20)
  private String username;

  @NotNull
  @Size(max = 50)
  @Email
  private String email;

  private Set<String> roles;

  @NotNull
  @Size(min = 6, max = 40)
  private String password;

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

  public Set<String> getRoles() {
    return this.roles;
  }

  public void setRole(Set<String> roles) {
    this.roles = roles;
  }
}
