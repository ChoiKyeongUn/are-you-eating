package com.ssafy.spring.model.repository;

import com.ssafy.spring.model.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
