package com.ssafy.spring.model.repository;

import com.ssafy.spring.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select u from User u where u.id = :id")
    User findByUserId(String id);
}
