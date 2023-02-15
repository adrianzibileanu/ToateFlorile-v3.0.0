package com.toateflorile.app.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "flr_rls")
public class TFRole {

  @Id
  private String id;

  private TFRoles name;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public TFRoles getName() {
    return name;
  }

  public void setName(TFRoles name) {
    this.name = name;
  }

  public TFRole(TFRoles name){
    this.name = name;
  }

  public TFRole(){}

}
