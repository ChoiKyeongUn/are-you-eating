package com.ssafy.spring.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.spring.model.entity.Review;
import com.ssafy.spring.model.entity.User;
import com.ssafy.spring.model.entity.UserBadge;
import com.ssafy.spring.model.entity.UserCategory;
import io.swagger.v3.oas.annotations.media.Schema;
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

    private Long userId;
    private String id;
    @JsonIgnore
    private String password;
    private String nickname;
    private String gender;
    private LocalDate birth;
    private String address;
    private Float latitude;
    private Float longitude;
    private Boolean isLoggedIn;
    private String profilePath;

    private List<ReviewDTO> reviews = new ArrayList<>();
    private List<UserCategoryDTO> userCategories = new ArrayList<>();
//    private List<UserBadgeDTO> userBadges = new ArrayList<>();

    @Builder
    public UserDTO(User user) {
        this.userId = user.getUserId();
        this.id = user.getId();
        this.nickname = user.getNickname();
        this.gender = user.getGender();
        this.birth = user.getBirth();
        this.address = user.getAddress();
        this.latitude = user.getLatitude();
        this.longitude = user.getLongitude();
        this.isLoggedIn = user.getIsLoggedIn();
        this.profilePath = user.getProfilePath();
        for(Review r: user.getReviews()) {
            this.reviews.add(new ReviewDTO(r,r.getStore().getName(),r.getUser().getId(), r.getUser().getNickname(), r.getUser().getProfilePath()));
        }
        for(UserCategory uc: user.getUserCategories()) {
            this.userCategories.add(new UserCategoryDTO(uc));
        }
//        for(UserBadge ub: user.getUserBadges()) {
//            this.userBadges.add(new UserBadgeDTO(ub));
//        }
    }

    @Getter
    public static class SigninPostReq {
        @Schema(name = "id", example = "ssafy1234")
        private String id;
        @Schema(name = "password", example = "password1234")
        private String password;

        public SigninPostReq(String id, String password) {
            this.id = id;
            this.password = password;
        }
    }

    @Getter
    public static class SigninPostRes {
        @Schema(name = "JWT Authentication Token")
        private String token;
        private Boolean isLoggedin;
        private Long userId;
        private String nickname;

        public SigninPostRes(String token, Boolean isLoggedin, Long userId, String nickname) {
            this.token = token;
            this.isLoggedin = isLoggedin;
            this.userId = userId;
            this.nickname = nickname;
        }
    }

    @Getter
    public static class SignupPostReq {
        @Schema(name = "id", example = "ssafy1234")
        private String id;
        @Schema(name = "password", example = "password1234")
        private String password;
        @Schema(name = "nickname", example = "경운기")
        private String nickname;
        @Schema(name = "gender", example = "남성")
        private String gender;
        @Schema(name = "birth", example = "2021-09-23")
        private LocalDate birth;
        @Schema(name = "address", example = "충북 증평군 ..")
        private String address;
        @Schema(name = "latitude", example = "123.45")
        private Float latitude;
        @Schema(name = "longitude", example = "111.22")
        private Float longitude;
        @Schema(name = "profilePath", example = "null")
        private String profilePath;

        @Builder
        public SignupPostReq(String id, String password, String nickname, String gender, LocalDate birth, String address, Float latitude, Float longitude, String profilePath) {
            this.id = id;
            this.password = password;
            this.nickname = nickname;
            this.gender = gender;
            this.birth = birth;
            this.address = address;
            this.latitude = latitude;
            this.longitude = longitude;
            this.profilePath = profilePath;
        }

        @Override
        public String toString() {
            return "SignupPostReq{" +
                    "id='" + id + '\'' +
                    ", password='" + password + '\'' +
                    ", nickname='" + nickname + '\'' +
                    ", gender='" + gender + '\'' +
                    ", birth=" + birth +
                    ", address='" + address + '\'' +
                    ", latitude=" + latitude +
                    ", longitude=" + longitude +
                    '}';
        }
    }
    @Getter
    public static class ModifyPostReq {
        @Schema(name = "password", example = "password4567")
        private String password;
        @Schema(name = "nickname", example = "기운경")
        private String nickname;
        @Schema(name = "gender", example = "여성")
        private String gender;
        @Schema(name = "birth", example = "2021-09-23")
        private LocalDate birth;
        @Schema(name = "address", example = "충북 증평군 ..")
        private String address;
        @Schema(name = "latitude", example = "123.45")
        private Float latitude;
        @Schema(name = "longitude", example = "111.22")
        private Float longitude;
        @Schema(name = "profilePath", example = "null")
        private String profilePath;

        @Builder
        public ModifyPostReq(String password, String nickname, String gender, LocalDate birth, String address, Float latitude, Float longitude, String profilePath) {
            this.password = password;
            this.nickname = nickname;
            this.gender = gender;
            this.birth = birth;
            this.address = address;
            this.latitude = latitude;
            this.longitude = longitude;
            this.profilePath = profilePath;
        }
    }
}
