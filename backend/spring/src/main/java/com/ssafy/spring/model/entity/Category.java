package com.ssafy.spring.model.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Category {

    @Id @GeneratedValue
    @Column(name = "category_id")
    private Long id;

    private String name;

    @OneToMany(mappedBy = "category")
    private List<StoreCategory> storeCategories = new ArrayList<>();

    @OneToMany(mappedBy = "category")
    private List<UserCategory> userCategories = new ArrayList<>();

    @Builder
    public Category(Long id, String name, List<StoreCategory> storeCategories, List<UserCategory> userCategories) {
        this.id = id;
        this.name = name;
        this.storeCategories = storeCategories;
        this.userCategories = userCategories;
    }
}
