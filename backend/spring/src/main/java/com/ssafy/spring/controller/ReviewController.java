package com.ssafy.spring.controller;

import com.ssafy.spring.common.auth.UserDetailsImpl;
import com.ssafy.spring.common.util.JwtTokenProvider;
import com.ssafy.spring.model.dto.ReviewDTO;
import com.ssafy.spring.model.entity.Review;
import com.ssafy.spring.service.ReviewService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/review")
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping("/{store_id}")
    @Operation(summary = "리뷰 작성", description = "내용을 입력하여 리뷰를 작성한다.", responses = {
            @ApiResponse(responseCode = "200", description = "작성 성공"),
            @ApiResponse(responseCode = "401", description = "인증 실패"),
            @ApiResponse(responseCode = "403", description = "토큰 없음"),
            @ApiResponse(responseCode = "409", description = "해당 회원 정보 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<Void> writeReview(@Parameter(hidden = true)  Authentication authentication,
                                                  @PathVariable("store_id") long storeId,
                                                  @Parameter(name = "리뷰 정보", required = true) @RequestBody ReviewDTO.WriteReviewReq req ) {
        ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
        if(userDetailsResponseEntity.getBody() == null) {
            return new ResponseEntity<>(null, userDetailsResponseEntity.getStatusCode());
        }
        String userId = userDetailsResponseEntity.getBody().getUsername();
        Long id = reviewService.writeReview(userId,storeId,req);
        if (id==null){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{review_id}")
    @Operation(summary = "리뷰 수정", description = "내용을 입력하여 리뷰를 수정한다.", responses = {
            @ApiResponse(responseCode = "200", description = "수정 성공"),
            @ApiResponse(responseCode = "401", description = "인증 실패"),
            @ApiResponse(responseCode = "403", description = "토큰 없음"),
            @ApiResponse(responseCode = "409", description = "해당 회원 정보 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<ReviewDTO.WriteReviewReq> modifyReview(@Parameter(hidden = true)  Authentication authentication,
                                                 @PathVariable("review_id") long reviewId,
                                                 @Parameter(name = "리뷰 정보", required = true) @RequestBody ReviewDTO.WriteReviewReq modifyReviewInfo ) {
        ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
        if(userDetailsResponseEntity.getBody() == null) {
            return new ResponseEntity<>(null, userDetailsResponseEntity.getStatusCode());
        }

        Long id = reviewService.modifyReview(reviewId, modifyReviewInfo);
        if (id==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{review_id}")
    @Operation(summary = "리뷰 삭제", description = "해당 리뷰를 삭제한다.", responses = {
            @ApiResponse(responseCode = "200", description = "삭제 성공"),
            @ApiResponse(responseCode = "401", description = "인증 실패"),
            @ApiResponse(responseCode = "403", description = "토큰 없음"),
            @ApiResponse(responseCode = "409", description = "해당 회원 정보 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<Void> deleteReview(@Parameter(hidden = true)  Authentication authentication,
                                                  @PathVariable("review_id") long reviewId) {
        ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
        if(userDetailsResponseEntity.getBody() == null) {
            return new ResponseEntity<>(null, userDetailsResponseEntity.getStatusCode());
        }

        boolean flag = reviewService.deleteReview(reviewId);
        if (!flag){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("")
    @Operation(summary = "사용자 리뷰 조회", description = "사용자가 작성한 리뷰를 조회한다.", responses = {
            @ApiResponse(responseCode = "200", description = "조회 성공"),
            @ApiResponse(responseCode = "401", description = "인증 실패"),
            @ApiResponse(responseCode = "403", description = "토큰 없음"),
            @ApiResponse(responseCode = "409", description = "해당 회원 정보 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<List<ReviewDTO>> getTotalReview(@Parameter(hidden = true)  Authentication authentication) {
        ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
        if(userDetailsResponseEntity.getBody() == null) {
            return new ResponseEntity<>(null, userDetailsResponseEntity.getStatusCode());
        }
        String userId = userDetailsResponseEntity.getBody().getUsername();
        List<ReviewDTO> totalList = reviewService.getTotalReview(userId);
        if (totalList == null || totalList.size() == 0){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(totalList,HttpStatus.OK);
    }

    // @GetMapping("/{store_id}")
    // @Operation(summary = "음식점 리뷰 조회", description = "음식점의 모든 리뷰를 조회한다.", responses = {
    //         @ApiResponse(responseCode = "200", description = "조회 성공"),
    //         @ApiResponse(responseCode = "401", description = "인증 실패"),
    //         @ApiResponse(responseCode = "403", description = "토큰 없음"),
    //         @ApiResponse(responseCode = "409", description = "해당 회원 정보 없음"),
    //         @ApiResponse(responseCode = "500", description = "서버 오류")})
    // public ResponseEntity<List<ReviewDTO>> getStoreReview(@Parameter(hidden = true)  Authentication authentication,
    //                                                       @PathVariable("store_id") long storeId) {
    //     ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
    //     if(userDetailsResponseEntity.getBody() == null) {
    //         return new ResponseEntity<>(null, userDetailsResponseEntity.getStatusCode());
    //     }

    //     List<ReviewDTO> storeList = reviewService.getStoreReview(storeId);
    //     if (storeList == null || storeList.size() == 0){
    //         return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    //     return new ResponseEntity<>(storeList,HttpStatus.OK);
    // }
}