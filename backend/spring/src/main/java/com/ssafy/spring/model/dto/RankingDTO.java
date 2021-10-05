package com.ssafy.spring.model.dto;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RankingDTO {
    private Long userId;
    private String id;
    private Integer count;
    private String profilePath;

    @Builder
    public RankingDTO(Long userId, String id, Integer count, String profilePath) {
        this.userId = userId;
        this.id = id;
        this.count = count;
        this.profilePath = profilePath;
    }
}
