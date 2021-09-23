package com.ssafy.spring.model.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Store {

    @Id @GeneratedValue
    @Column(name = "store_id")
    private Long id;

    private String name;
    private String branch;
    private String area;
    private String tel;
    private String address;
    private Float latitude;
    private Float longitude;

    @OneToMany(mappedBy = "store")
    private List<Menu> menus = new ArrayList<>();

    @OneToMany(mappedBy = "store")
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "store")
    private List<StoreCategory> storeCategories = new ArrayList<>();

    @Builder
    public Store(Long id, String name, String branch, String area, String tel, String address, Float latitude, Float longitude, List<Menu> menus, List<Review> reviews, List<StoreCategory> storeCategories) {
        this.id = id;
        this.name = name;
        this.branch = branch;
        this.area = area;
        this.tel = tel;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.menus = menus;
        this.reviews = reviews;
        this.storeCategories = storeCategories;
    }
}
