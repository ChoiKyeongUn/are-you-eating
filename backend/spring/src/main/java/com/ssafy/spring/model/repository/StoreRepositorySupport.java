package com.ssafy.spring.model.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.spring.model.dto.StoreDTO;
import com.ssafy.spring.model.entity.QStore;
import com.ssafy.spring.model.entity.Store;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public class StoreRepositorySupport extends QuerydslRepositorySupport {
	
	private final JPAQueryFactory jpaQueryFactory;
	private final QStore store = QStore.store;
	public StoreRepositorySupport(JPAQueryFactory jpaQueryFactory) {
		super(Store.class);
		this.jpaQueryFactory = jpaQueryFactory;
		// TODO Auto-generated constructor stub
	}


	public List<Store> findAll(String keyword, Pageable pageable) {
		JPAQuery<Store> jpaQuery = jpaQueryFactory
				.select(store)
				.from(store)
				.where(filterEq(keyword));		
		List<Store> list = getQuerydsl().applyPagination(pageable, jpaQuery).fetch();
		return list;
	}

	private BooleanExpression filterEq(String keyword) {
		if (keyword == null) {
			return null;
		}
		return store.name.contains(keyword);
	}
}
