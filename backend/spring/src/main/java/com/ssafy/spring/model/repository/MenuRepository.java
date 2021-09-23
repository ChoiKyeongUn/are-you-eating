package com.ssafy.spring.model.repository;

import com.ssafy.spring.model.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<Menu, Long> {
}
