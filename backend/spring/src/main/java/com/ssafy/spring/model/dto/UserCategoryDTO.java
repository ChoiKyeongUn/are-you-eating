package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.UserCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

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

    @Getter
    public static class RegisterCategoryPostReq {
        @Schema(name = "등록할 선호 카테고리명들", example = "[\"치킨\", \"피자\", \"고기\", \"패스트푸드\"]")
        List<String> categories;

        public RegisterCategoryPostReq() {}

        @Builder
        public RegisterCategoryPostReq(List<String> categories) {
            this.categories = categories;
        }
    }
}
