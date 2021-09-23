package com.ssafy.spring.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
public class JpaConfig {
    // QueryDSL 사용한다면,
//    @PersistenceContext
//    EntityManager entityManager;
//
//    @Bean
//    public JPAQueryFactory jpaQueryFactory() { return new JPAQueryFactory(entityManager); }
}
