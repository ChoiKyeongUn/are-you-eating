package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.StoreCategory;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class StoreCategoryDTO {

    private StoreDTO store;
    private CategoryDTO category;

    @Builder
    public StoreCategoryDTO(StoreCategory storeCategory) {
        this.store = new StoreDTO(storeCategory.getStore());
        this.category = new CategoryDTO(storeCategory.getCategory());
    }
}
