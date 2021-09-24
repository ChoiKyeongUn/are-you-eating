package com.ssafy.spring.model.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Review {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id")
    private Store store;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    private Integer score;
    private String content;
    private LocalDateTime regTime;

    @Builder
    public Review(Long id, Store store, User user, Integer score, String content, LocalDateTime regTime) {
        this.id = id;
        this.store = store;
        this.user = user;
        this.score = score;
        this.content = content;
        this.regTime = regTime;
    }
}
