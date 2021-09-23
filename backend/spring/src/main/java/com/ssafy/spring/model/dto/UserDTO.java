package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.Review;
import com.ssafy.spring.model.entity.User;
import com.ssafy.spring.model.entity.UserBadge;
import com.ssafy.spring.model.entity.UserCategory;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserDTO {

    private String id;
    private String nickname;
    private String gender;
    private LocalDate birth;
    private String address;
    private Float latitude;
    private Float longitude;
    private Boolean isLoggedIn;

    private List<ReviewDTO> reviews = new ArrayList<>();
    private List<UserCategoryDTO> userCategories = new ArrayList<>();
    private List<UserBadgeDTO> userBadges = new ArrayList<>();

    @Builder
    public UserDTO(User user) {
        this.id = user.getId();
        this.nickname = user.getNickname();
        this.gender = user.getGender();
        this.birth = user.getBirth();
        this.address = user.getAddress();
        this.latitude = user.getLatitude();
        this.longitude = user.getLongitude();
        this.isLoggedIn = user.getIsLoggedIn();
        for(Review r: user.getReviews()) {
            this.reviews.add(new ReviewDTO(r));
        }
        for(UserCategory uc: user.getUserCategories()) {
            this.userCategories.add(new UserCategoryDTO(uc));
        }
        for(UserBadge ub: user.getUserBadges()) {
            this.userBadges.add(new UserBadgeDTO(ub));
        }
    }
}
