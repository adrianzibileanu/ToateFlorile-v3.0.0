package com.toateflorile.app.web.rest;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.toateflorile.app.domain.TFRole;
import com.toateflorile.app.domain.TFRoles;
import com.toateflorile.app.domain.User;
import com.toateflorile.app.payload.request.LoginRequest;
import com.toateflorile.app.payload.request.SignupRequest;
import com.toateflorile.app.payload.response.MessageResponse;
import com.toateflorile.app.payload.response.UserInfoResponse;
import com.toateflorile.app.repository.TFRoleRepository;
import com.toateflorile.app.repository.UserRepository;
import com.toateflorile.app.security.JwtUtils;
import com.toateflorile.app.config.impl.UserImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepository userRepository;

  @Autowired
  TFRoleRepository roleRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager.authenticate(
      new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);

    UserImpl userDetails = (UserImpl) authentication.getPrincipal();

    ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);

    List<String> roles = userDetails.getAuthorities().stream()
      .map(item -> item.getAuthority())
      .collect(Collectors.toList());

    return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
      .body(new UserInfoResponse(userDetails.getId(),
        userDetails.getUsername(),
        userDetails.getEmail(),
        roles));
  }

  @PostMapping("/logout")
  public ResponseEntity<?> logout(HttpServletRequest request) {
    String token = jwtUtils.getJwtFromCookies(request);
    jwtUtils.invalidateToken(token);
    return ResponseEntity.ok(new MessageResponse("Logout successful"));
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity
        .badRequest()
        .body(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity
        .badRequest()
        .body(new MessageResponse("Error: Email is already in use!"));
    }

    // Create new user's account
    User user = new User(signUpRequest.getId(), signUpRequest.getUsername(),
      signUpRequest.getEmail(),
      encoder.encode(signUpRequest.getPassword()));

    Set<String> strRoles = signUpRequest.getRoles();
    Set<TFRole> roles = new HashSet<>();

    if (strRoles == null) {
      TFRole userRole = roleRepository.findByName(TFRoles.ROLE_FLOWERUSER)
        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
      roles.add(userRole);
    } else {
      strRoles.forEach(role -> {
        switch (role) {
          case "admin":
            TFRole adminRole = roleRepository.findByName(TFRoles.ROLE_ADMINOFALLPLANTSANDFLOWERS)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(adminRole);

            break;
          default:
            TFRole userRole = roleRepository.findByName(TFRoles.ROLE_UNKNOWNFLOWER)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        }
      });
    }

    user.setRoles(roles);
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }
}
