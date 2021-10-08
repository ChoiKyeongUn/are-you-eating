package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.UserBadge;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserBadgeDTO {

    private UserDTO user;
    private BadgeDTO badge;

    @Builder
    public UserBadgeDTO(UserBadge userBadge) {
        this.user = new UserDTO(userBadge.getUser());
        this.badge = new BadgeDTO(userBadge.getBadge());
    }
}
