package com.ssafy.spring.model.repository;

import com.ssafy.spring.model.dto.ReviewDTO;
import com.ssafy.spring.model.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query("select r from  Review r where r.user.id = :id")
    List<Review> findByUserId(String id);
    @Query("select r from  Review r where r.store.storeId = :storeId")
    List<ReviewDTO> findByStoreId(long storeId);
}
