package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.Category;
import com.ssafy.spring.model.entity.StoreCategory;
import com.ssafy.spring.model.entity.UserCategory;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CategoryDTO {

    private String name;
    private List<StoreCategoryDTO> storeCategories = new ArrayList<>();
    private List<UserCategoryDTO> userCategories = new ArrayList<>();

    @Builder
    public CategoryDTO(Category category) {
        this.name = category.getName();
        for(StoreCategory sc: category.getStoreCategories()) {
            this.storeCategories.add(new StoreCategoryDTO(sc));
        }
        for(UserCategory uc: category.getUserCategories()) {
            this.userCategories.add(new UserCategoryDTO(uc));
        }
    }
}
