package com.ssafy.spring.model.repository;

import com.ssafy.spring.model.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query("select r from  Review r where r.user.id = :id")
    Optional<Review> findByUserId(String id);
}
