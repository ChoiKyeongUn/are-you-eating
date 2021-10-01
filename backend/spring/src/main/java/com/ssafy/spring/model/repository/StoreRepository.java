package com.ssafy.spring.model.repository;

import com.ssafy.spring.model.dto.StoreDTO;
import com.ssafy.spring.model.entity.Store;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StoreRepository extends JpaRepository<Store, Long> {
}
