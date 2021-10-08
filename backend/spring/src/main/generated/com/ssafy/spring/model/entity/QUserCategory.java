package com.ssafy.spring.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserCategory is a Querydsl query type for UserCategory
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserCategory extends EntityPathBase<UserCategory> {

    private static final long serialVersionUID = -79119243L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUserCategory userCategory = new QUserCategory("userCategory");

    public final QCategory category;

    public final QUser user;

    public final NumberPath<Long> userCategoryId = createNumber("userCategoryId", Long.class);

    public QUserCategory(String variable) {
        this(UserCategory.class, forVariable(variable), INITS);
    }

    public QUserCategory(Path<? extends UserCategory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUserCategory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUserCategory(PathMetadata metadata, PathInits inits) {
        this(UserCategory.class, metadata, inits);
    }

    public QUserCategory(Class<? extends UserCategory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.category = inits.isInitialized("category") ? new QCategory(forProperty("category")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user")) : null;
    }

}

