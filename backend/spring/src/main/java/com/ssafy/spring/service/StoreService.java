package com.ssafy.spring.service;

import com.ssafy.spring.model.dto.StoreDTO;
import com.ssafy.spring.model.entity.Store;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface StoreService {
    StoreDTO findById(Long storeId);
    List<StoreDTO> getStoreList(String keyword, Pageable pageable);
}
