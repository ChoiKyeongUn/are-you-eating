package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.Category;
import com.ssafy.spring.model.entity.StoreCategory;
import com.ssafy.spring.model.entity.UserCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CategoryDTO {

    private Long categoryId;
    private String name;
    private List<StoreCategoryDTO> storeCategories = new ArrayList<>();
    private List<UserCategoryDTO> userCategories = new ArrayList<>();

    @Builder
    public CategoryDTO(Category category) {
        this.categoryId = category.getCategoryId();
        this.name = category.getName();
        for(StoreCategory sc: category.getStoreCategories()) {
            this.storeCategories.add(new StoreCategoryDTO(sc));
        }
        for(UserCategory uc: category.getUserCategories()) {
            this.userCategories.add(new UserCategoryDTO(uc));
        }
    }

    @Getter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class RegisterCategoryReq {
        @Schema(description = "등록할 카테고리들", example = "[\"치킨\", \"피자\", \"고기\", \"패스트푸드\"]")
        private List<String> categories;

        @Builder
        public RegisterCategoryReq(List<String> categories) {
            this.categories = categories;
        }
    }
}
