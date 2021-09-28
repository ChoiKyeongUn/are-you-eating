package com.ssafy.spring.controller;

import com.ssafy.spring.model.dto.StoreDTO;
import com.ssafy.spring.service.StoreService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/store")
public class StoreController {

    private final StoreService storeService;

    @GetMapping("/{storeId}")
    @Operation(summary = "음식점 상세 정보", description = "음식점 상세 정보를 조회한다.", responses = {
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "204", description = "해당 음식점 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<StoreDTO> storeDetail(@Parameter(name = "storeId", description ="음식점 id(기본키)", example = "1") @PathVariable("storeId") Long storeId) {
        System.out.println(storeId);
        StoreDTO store = storeService.findById(storeId);
        if(store == null) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(store, HttpStatus.OK);
    }
}
