package com.ssafy.spring.model.repository;

import com.ssafy.spring.model.entity.UserCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCategoryRepository extends JpaRepository<UserCategory, Long> {
}
