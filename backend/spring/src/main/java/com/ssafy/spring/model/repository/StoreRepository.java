package com.ssafy.spring.model.repository;

import com.ssafy.spring.model.dto.StoreDTO;
import com.ssafy.spring.model.entity.Store;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StoreRepository extends JpaRepository<Store, Long> {
    @Query(nativeQuery = true,
            value = "select distinct(s.store_id) " +
                    "from store s " +
                    "join store_category c " +
                    "on s.store_id = c.store_id " +
                    "where c.category_id in (10, 11) " +
                    "and s.latitude between :lat1 and :lat2 " +
                    "and s.longitude between :long1 and :long2 " +
                    "order by rand() " +
                    "limit 3"
    )
    List<Object[]> getNearbyStores(@Param("lat1") double lat1,
                                 @Param("lat2") double lat2,
                                 @Param("long1") double long1,
                                 @Param("long2") double long2);

}
