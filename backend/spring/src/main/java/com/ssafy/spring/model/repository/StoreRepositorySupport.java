package com.ssafy.spring.model.repository;

import com.querydsl.core.Tuple;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.PathBuilder;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.spring.model.dto.StoreDTO;
import com.ssafy.spring.model.entity.QReview;
import com.ssafy.spring.model.entity.QStore;
import com.ssafy.spring.model.entity.Store;

import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
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
	private final QReview review = QReview.review;
	public StoreRepositorySupport(JPAQueryFactory jpaQueryFactory) {
		super(Store.class);
		this.jpaQueryFactory = jpaQueryFactory;
		// TODO Auto-generated constructor stub
	}


	public List<Store> findAll(String keyword, Pageable pageable, String sort) {
//		JPAQuery<Store> jpaQuery = jpaQueryFactory
//				.select(store)
//				.from(store)
//				.where(filterEq(keyword));
		JPAQuery<Store> jpaQuery = jpaQueryFactory
				.select(store)
				.from(store)
				.leftJoin(store.reviews, review)
				.groupBy(store.storeId)
				.having(kerwordEq(keyword));

		switch(sort){
			case "rating":
				jpaQuery.orderBy(review.score.avg().desc());
				break;
			case "count":
				jpaQuery.orderBy(store.name.count().desc());
				break;
			default:
				jpaQuery.orderBy();
		}
		List<Store> list = getQuerydsl().applyPagination(pageable, jpaQuery).fetch();
		return list;
	}

	private BooleanExpression kerwordEq(String keyword) {
		if (keyword == null) {
			return null;
		}
		return store.name.contains(keyword);
	}
}
