package com.ssafy.spring.service;

import com.ssafy.spring.model.dto.ReviewDTO;
import com.ssafy.spring.model.entity.Review;

import java.util.List;

public interface ReviewService {
    // 리뷰 작성
    Long writeReview(String id, long storeId, ReviewDTO.WriteReviewReq reviewInfo);
    // 리뷰 수정
    Long modifyReview(long reviewId, ReviewDTO.WriteReviewReq req);
    // 리뷰 삭제
    Boolean deleteReview(long id);
    // 사용자 리뷰 전체 조회
    List<ReviewDTO> getTotalReview(String id);
    // 음식점 리뷰 조회
    List<ReviewDTO> getStoreReview(long storeId);
}
