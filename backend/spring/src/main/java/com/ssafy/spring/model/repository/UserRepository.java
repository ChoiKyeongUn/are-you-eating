package com.ssafy.spring.model.repository;

import com.ssafy.spring.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
