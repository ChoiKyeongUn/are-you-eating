package com.ssafy.spring.service;

import com.ssafy.spring.model.dto.StoreDTO;

public interface StoreService {
    StoreDTO findById(Long storeId);
}
