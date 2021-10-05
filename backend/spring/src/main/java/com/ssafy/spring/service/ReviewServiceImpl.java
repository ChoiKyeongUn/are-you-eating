package com.ssafy.spring.service;

import com.ssafy.spring.model.dto.ReviewDTO;
import com.ssafy.spring.model.entity.Review;
import com.ssafy.spring.model.entity.Store;
import com.ssafy.spring.model.entity.User;
import com.ssafy.spring.model.repository.ReviewRepository;
import com.ssafy.spring.model.repository.StoreRepository;
import com.ssafy.spring.model.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepo;
    private final UserRepository userRepository;
    private final StoreRepository storeRepository;

    @Override
    @Transactional
    public Long writeReview(String id, long storeId, ReviewDTO.WriteReviewReq reviewInfo) {
        Optional<User> user = userRepository.findByUserId(id);
        Optional<Store> store = storeRepository.findById(storeId);
        Review review = Review.builder()
                .user(user.get())
                .store(store.get())
                .score(reviewInfo.getScore())
                .content(reviewInfo.getContent())
                .regTime(reviewInfo.getRegTime())
                .build();
        review = reviewRepo.save(review);
        return review.getReviewId();
    }

    @Override
    @Transactional
    public Long modifyReview(long reviewId, ReviewDTO.WriteReviewReq req) {
        Optional<Review> oreview = reviewRepo.findById(reviewId);
        if (oreview == null){
            return null;
        }
        Review review = oreview.get();
        review.modifyReview(req);
        return review.getReviewId();
    }

    @Override
    @Transactional
    public Boolean deleteReview(long reviewId) {
        Optional<Review> review = reviewRepo.findById(reviewId);
        if(review.isPresent()){
            reviewRepo.deleteById(review.get().getReviewId());
            return true;
        }
        return false;
    }

    @Override
    public List<ReviewDTO> getTotalReview(String id) {
        List<Review> list = reviewRepo.findByUserId(id);
        List<ReviewDTO> reviews = new ArrayList<>();
        for (int i =0; i< list.size();i++){
            reviews.add(new ReviewDTO(list.get(i),list.get(i).getStore().getName(),list.get(i).getUser().getNickname()));
        }
        return reviews;
    }

    @Override
    public List<ReviewDTO> getStoreReview(long storeId) {
        List<Review> list = reviewRepo.findByStoreId(storeId);
        List<ReviewDTO> reviews = new ArrayList<>();
        for (int i =0; i< list.size();i++){
            reviews.add(new ReviewDTO(list.get(i),list.get(i).getStore().getName(),list.get(i).getUser().getNickname()));
        }
        return reviews;
    }
}
