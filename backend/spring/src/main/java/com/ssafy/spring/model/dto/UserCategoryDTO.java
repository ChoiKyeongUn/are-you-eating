package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.UserCategory;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserCategoryDTO {

    private Long userId;
    private String name;

    @Builder
    public UserCategoryDTO(UserCategory userCategory) {
        this.userId = userCategory.getUser().getUserId();
        this.name = userCategory.getCategory().getName();
    }
}
