package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.Menu;
import com.ssafy.spring.model.entity.Review;
import com.ssafy.spring.model.entity.Store;
import com.ssafy.spring.model.entity.StoreCategory;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class StoreDTO {

    private Long storeId;
    private String name;
    private String branch;
    private String area;
    private String tel;
    private String address;
    private Float latitude;
    private Float longitude;
    private String imgUrl;
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
        this.imgUrl = store.getImgUrl();
        for(Menu m: store.getMenus()) {
            this.menus.add(new MenuDTO(m));
        }
        for(Review r: store.getReviews()) {
            ++cnt;
            total += r.getScore();

            this.reviews.add(new ReviewDTO(r,r.getStore().getName(),r.getUser().getId(), r.getUser().getNickname(),r.getUser().getProfilePath()));

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

    @Getter
    public static class InfoGetRes {
        StoreDTO storeInfo;
        List<StoreDTO> nearbyStores = new ArrayList<>();

        @Builder
        public InfoGetRes(StoreDTO storeInfo, List<StoreDTO> nearbyStores) {
            this.storeInfo = storeInfo;
            this.nearbyStores = nearbyStores;
        }
    }
}
