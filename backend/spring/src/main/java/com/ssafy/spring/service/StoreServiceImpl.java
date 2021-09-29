package com.ssafy.spring.service;

import com.ssafy.spring.model.dto.StoreDTO;
import com.ssafy.spring.model.entity.Store;
import com.ssafy.spring.model.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class StoreServiceImpl implements StoreService {

    private final StoreRepository storeRepository;

    @Override
    public StoreDTO findById(Long storeId) {
        Optional<Store> findStore = storeRepository.findById(storeId);
        if(!findStore.isPresent()) {
            return null;
        }
        return new StoreDTO(findStore.get());
    }
}
