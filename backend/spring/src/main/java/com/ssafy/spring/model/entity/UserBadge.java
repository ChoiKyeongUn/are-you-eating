package com.ssafy.spring.model.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserBadge {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_badge_id")
    private long userBadgeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "badge_id")
    private Badge badge;

    @Builder
    public UserBadge(long userBadgeId, User user, Badge badge) {
        this.userBadgeId = userBadgeId;
        this.user = user;
        this.badge = badge;
    }
}
