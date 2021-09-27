package com.ssafy.spring.model.entity;

import com.ssafy.spring.model.dto.UserDTO;
import lombok.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    private String id;
    private String password;
    private String nickname;
    private String gender;
    private LocalDate birth;
    private String address;
    private Float latitude;
    private Float longitude;
    @Column(name = "is_loggedin")
    private Boolean isLoggedIn;

    @OneToMany(mappedBy = "user")
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<UserCategory> userCategories = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<UserBadge> userBadges = new ArrayList<>();

    @Builder
    public User(Long userId, String id, String password, String nickname, String gender, LocalDate birth, String address, Float latitude, Float longitude, Boolean isLoggedIn, List<Review> reviews, List<UserCategory> userCategories, List<UserBadge> userBadges) {
        this.userId = userId;
        this.id = id;
        this.password = password;
        this.nickname = nickname;
        this.gender = gender;
        this.birth = birth;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.isLoggedIn = isLoggedIn;
        this.reviews = reviews;
        this.userCategories = userCategories;
        this.userBadges = userBadges;
    }

    public void modify(UserDTO.SignupPostReq req) {
        this.setPassword(new BCryptPasswordEncoder().encode(req.getPassword()));
        this.setNickname(req.getNickname());
        this.setGender(req.getGender());
        this.setBirth(req.getBirth());
        this.setAddress(req.getAddress());
        this.setLatitude(req.getLatitude());
        this.setLongitude(req.getLongitude());
    }
}
