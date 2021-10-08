package com.ssafy.spring.model.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Menu {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "menu_id")
    private Long menuId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id")
    private Store store;

    private String name;
    private Integer price;

    @Builder
    public Menu(Long menuId, Store store, String name, Integer price) {
        this.menuId = menuId;
        this.store = store;
        this.name = name;
        this.price = price;
    }
}
