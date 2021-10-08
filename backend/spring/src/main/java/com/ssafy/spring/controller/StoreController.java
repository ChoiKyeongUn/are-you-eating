
package com.ssafy.spring.controller;

import com.ssafy.spring.common.auth.UserDetailsImpl;
import com.ssafy.spring.common.util.JwtTokenProvider;
import com.ssafy.spring.model.dto.StoreDTO;
import com.ssafy.spring.service.StoreService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/store")
public class StoreController {

	private final StoreService storeService;

//	@GetMapping("/{storeId}")
//	@Operation(summary = "음식점 상세 정보", description = "음식점 상세 정보를 조회한다.", responses = {
//			@ApiResponse(responseCode = "200", description = "성공"),
//			@ApiResponse(responseCode = "204", description = "해당 음식점 없음"),
//			@ApiResponse(responseCode = "500", description = "서버 오류") })
//	public ResponseEntity<StoreDTO> storeDetail(@Parameter(hidden = true) Authentication authentication,
//			@Parameter(name = "storeId", description = "음식점 id(기본키)", example = "120922") @PathVariable("storeId") Long storeId) {
//		ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
//		if(userDetailsResponseEntity.getBody() == null) {
//			return new ResponseEntity<>(null, userDetailsResponseEntity.getStatusCode());
//		}
//		StoreDTO store = storeService.findById(storeId);
//		if (store == null) {
//			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
//		}
//		return new ResponseEntity<>(store, HttpStatus.OK);
//	}

	@GetMapping("/{storeId}")
	@Operation(summary = "음식점 상세 정보", description = "음식점 상세 정보를 조회한다.", responses = {
			@ApiResponse(responseCode = "200", description = "성공"),
			@ApiResponse(responseCode = "204", description = "해당 음식점 없음"),
			@ApiResponse(responseCode = "500", description = "서버 오류") })
	public ResponseEntity<StoreDTO.InfoGetRes> storeDetail(@Parameter(hidden = true) Authentication authentication,
												@Parameter(name = "storeId", description = "음식점 id(기본키)", example = "120922") @PathVariable("storeId") Long storeId) {
		ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
		if(userDetailsResponseEntity.getBody() == null) {
			return new ResponseEntity<>(null, userDetailsResponseEntity.getStatusCode());
		}
		StoreDTO store = storeService.findById(storeId);
		if (store == null) {
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		}
		List<StoreDTO> nearbyStores = storeService.findNearbyStore(store);
		return new ResponseEntity<>(new StoreDTO.InfoGetRes(store, nearbyStores), HttpStatus.OK);
	}
	@GetMapping("/search")
	@Operation(summary = "음식점 검색 정보", description = "음식점 검색 정보를 조회한다.", responses = {
			@ApiResponse(responseCode = "200", description = "성공"),
			@ApiResponse(responseCode = "204", description = "해당 음식점 없음"),
			@ApiResponse(responseCode = "500", description = "서버 오류") })
	public ResponseEntity<List<StoreDTO>> getStoreList(@Parameter(hidden = true)  Authentication authentication,
			@RequestParam(value="page", required=false, defaultValue="0") int page, @RequestParam(value="size", required=false, defaultValue="10") int size,
			@RequestParam("keyword") String keyword, @RequestParam(value = "sort", defaultValue = "rating") String sort) {
		ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
		if(userDetailsResponseEntity.getBody() == null) {
			return new ResponseEntity<>(null, userDetailsResponseEntity.getStatusCode());
		}

		Pageable pageable = PageRequest.of(page, size);
		List<StoreDTO> stores = storeService.getStoreList(keyword, pageable, sort);
		if (stores == null || stores.size() == 0) {
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(stores, HttpStatus.OK);
	}
}
