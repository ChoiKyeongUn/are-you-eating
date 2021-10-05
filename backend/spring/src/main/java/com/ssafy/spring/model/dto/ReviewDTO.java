package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.Review;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ReviewDTO {

    private Long storeId;
    private Long userId;
    private Integer score;
    private String content;
    private LocalDateTime regTime;
    private String storeName;
    private String userNickname;

    @Builder
    public ReviewDTO(Review review) {
        this.storeId = review.getStore().getStoreId();
        this.userId = review.getUser().getUserId();
        this.score = review.getScore();
        this.content = review.getContent();
        this.regTime = review.getRegTime();
    }

    @Builder
    public ReviewDTO(Review review, String storeName, String userNickname) {
        this.storeId = review.getStore().getStoreId();
        this.userId = review.getUser().getUserId();
        this.score = review.getScore();
        this.content = review.getContent();
        this.regTime = review.getRegTime();
        this.storeName = storeName;
        this.userNickname = userNickname;
    }

    @Getter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class WriteReviewReq{
        @Schema(name = "score", example = "1")
        private Integer score;
        @Schema(name = "content", example = "맛이 없어요")
        private String content;
        @Schema(name = "regTime", example = "2012-09-23 12:30:00")
        private LocalDateTime regTime;

        @Builder
        public WriteReviewReq(Review review) {
            this.score = review.getScore();
            this.content = review.getContent();
            this.regTime = review.getRegTime();
        }
    }
}
