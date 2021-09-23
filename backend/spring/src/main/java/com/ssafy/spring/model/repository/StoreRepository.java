package com.ssafy.spring.model.repository;

import com.ssafy.spring.model.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreRepository extends JpaRepository<Store, Long> {
}
