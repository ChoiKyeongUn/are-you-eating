package com.ssafy.spring.model.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.ArrayList;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Badge {

    @Id @GeneratedValue
    @Column(name = "badge_id")
    private Long id;

    private String name;

    @OneToMany(mappedBy = "badge")
    private List<UserBadge> userBadges = new ArrayList<>();

    @Builder
    public Badge(Long id, String name, List<UserBadge> userBadges) {
        this.id = id;
        this.name = name;
        this.userBadges = userBadges;
    }
}
