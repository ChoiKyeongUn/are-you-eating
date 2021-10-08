package com.ssafy.spring.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCategory is a Querydsl query type for Category
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCategory extends EntityPathBase<Category> {

    private static final long serialVersionUID = -46035574L;

    public static final QCategory category = new QCategory("category");

    public final NumberPath<Long> categoryId = createNumber("categoryId", Long.class);

    public final StringPath name = createString("name");

    public final ListPath<StoreCategory, QStoreCategory> storeCategories = this.<StoreCategory, QStoreCategory>createList("storeCategories", StoreCategory.class, QStoreCategory.class, PathInits.DIRECT2);

    public final ListPath<UserCategory, QUserCategory> userCategories = this.<UserCategory, QUserCategory>createList("userCategories", UserCategory.class, QUserCategory.class, PathInits.DIRECT2);

    public QCategory(String variable) {
        super(Category.class, forVariable(variable));
    }

    public QCategory(Path<? extends Category> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCategory(PathMetadata metadata) {
        super(Category.class, metadata);
    }

}

