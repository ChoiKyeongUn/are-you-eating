package com.ssafy.spring.model.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class StoreCategory {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "store_category_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id")
    private Store store;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @Builder
    public StoreCategory(Long id, Store store, Category category) {
        this.id = id;
        this.store = store;
        this.category = category;
    }
}
