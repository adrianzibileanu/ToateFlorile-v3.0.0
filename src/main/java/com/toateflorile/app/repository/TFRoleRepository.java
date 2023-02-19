package com.toateflorile.app.repository;

import com.toateflorile.app.domain.TFRole;
import com.toateflorile.app.domain.TFRoles;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TFRoleRepository extends MongoRepository<TFRole, String> {

  Optional<TFRole> findByName(TFRoles name);

}
