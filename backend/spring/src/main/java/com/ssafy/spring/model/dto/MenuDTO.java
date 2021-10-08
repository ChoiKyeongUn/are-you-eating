package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.Menu;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MenuDTO {

    private Long storeId;
    private String name;
    private Integer price;

    @Builder
    public MenuDTO(Menu menu) {
        this.storeId = menu.getStore().getStoreId();
        this.name = menu.getName();
        this.price = menu.getPrice();
    }
}
