package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.Menu;
import com.ssafy.spring.model.entity.Review;
import com.ssafy.spring.model.entity.Store;
import com.ssafy.spring.model.entity.StoreCategory;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class StoreDTO {

    private Long storeId;
    private String name;
    private String branch;
    private String area;
    private String tel;
    private String address;
    private Float latitude;
    private Float longitude;
    private Double score;

    private List<MenuDTO> menus = new ArrayList<>();
    private List<ReviewDTO> reviews = new ArrayList<>();
    private List<StoreCategoryDTO> storeCategories = new ArrayList<>();

    @Builder
    public StoreDTO(Store store) {
        double total = 0;
        int cnt = 0;
        this.storeId = store.getStoreId();
        this.name = store.getName();
        this.branch = store.getBranch();
        this.area = store.getArea();
        this.tel = store.getTel();
        this.address = store.getAddress();
        this.latitude = store.getLatitude();
        this.longitude = store.getLongitude();
        for(Menu m: store.getMenus()) {
            this.menus.add(new MenuDTO(m));
        }
        for(Review r: store.getReviews()) {
            ++cnt;
            total += r.getScore();
            System.out.println(r.getScore());
            if(r.getUser().getNickname() != "" && r.getUser().getNickname() != null) {
                this.reviews.add(new ReviewDTO(r,r.getStore().getName(),r.getUser().getNickname()));
            }
        }
        if(cnt == 0) {
            this.score = 0.0;
        } else {
            this.score = total / cnt;
        }
        for(StoreCategory sc: store.getStoreCategories()) {
            this.storeCategories.add(new StoreCategoryDTO(sc));
        }
    }
}
