package com.ssafy.spring.model.repository;

import com.ssafy.spring.model.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
