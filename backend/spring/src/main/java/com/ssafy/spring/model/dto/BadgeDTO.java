package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.Badge;
import com.ssafy.spring.model.entity.UserBadge;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BadgeDTO {
    private String name;
    private List<UserBadgeDTO> userBadges = new ArrayList<>();

    @Builder
    public BadgeDTO(Badge badge) {
        this.name = badge.getName();
        for(UserBadge ub: badge.getUserBadges()) {
            this.userBadges.add(new UserBadgeDTO(ub));
        }
    }
}
