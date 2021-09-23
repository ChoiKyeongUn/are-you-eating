package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.UserCategory;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserCategoryDTO {

    private UserDTO user;
    private CategoryDTO category;

    @Builder
    public UserCategoryDTO(UserCategory userCategory) {
        this.user = new UserDTO(userCategory.getUser());
        this.category = new CategoryDTO(userCategory.getCategory());
    }
}
