package com.ssafy.spring.model.repository;

import com.ssafy.spring.model.entity.UserBadge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserBadgeRepository extends JpaRepository<UserBadge, Long> {
}
