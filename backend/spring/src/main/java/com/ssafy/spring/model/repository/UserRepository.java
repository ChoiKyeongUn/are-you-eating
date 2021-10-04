package com.ssafy.spring.model.repository;

import com.ssafy.spring.model.dto.RankingDTO;
import com.ssafy.spring.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select u from User u where u.id = :id")
    Optional<User> findByUserId(String id);

    @Query(nativeQuery = true,
           value = "select u.user_id, u.id, count(*) " +
                   "from review as r " +
                   "join user as u " +
                   "on r.user_id = u.user_id " +
                   "where u.nickname != '' and year(r.reg_time) = year(now()) and month(r.reg_time) = month(now())" +
                   "group by u.user_id " +
                   "limit 10")
    List<Object[]> getRanking();
}
