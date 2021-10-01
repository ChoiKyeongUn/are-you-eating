package com.ssafy.spring.service;

import com.ssafy.spring.model.dto.StoreDTO;
import com.ssafy.spring.model.entity.Store;
import com.ssafy.spring.model.repository.StoreRepository;
import com.ssafy.spring.model.repository.StoreRepositorySupport;

import lombok.RequiredArgsConstructor;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class StoreServiceImpl implements StoreService {

	private final StoreRepository storeRepository;
	private final StoreRepositorySupport storeRepositorySupport;

	@Override
	public StoreDTO findById(Long storeId) {
		Optional<Store> findStore = storeRepository.findById(storeId);
		if (!findStore.isPresent()) {
			return null;
		}
		return new StoreDTO(findStore.get());
	}

	@Override
	public List<StoreDTO> getStoreList(String keyword, Pageable pageable) {
		List<Store> list = storeRepositorySupport.findAll(keyword, pageable);
		List<StoreDTO> stores = new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			stores.add(new StoreDTO(list.get(i)));
		}
		
//		ModelMapper modelMapper = new ModelMapper();
//		List<StoreDTO> stores = list.stream().map(Store -> modelMapper.map(Store, StoreDTO.class))
//				.collect(Collectors.toList());
		return stores;
	}
}
