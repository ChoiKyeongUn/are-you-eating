package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.StoreCategory;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class StoreCategoryDTO {

    private String name;

    @Builder
    public StoreCategoryDTO(StoreCategory storeCategory) {
        this.name = storeCategory.getCategory().getName();
    }
}
