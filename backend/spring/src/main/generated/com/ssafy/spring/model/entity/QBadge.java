package com.ssafy.spring.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QBadge is a Querydsl query type for Badge
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QBadge extends EntityPathBase<Badge> {

    private static final long serialVersionUID = -1036224873L;

    public static final QBadge badge = new QBadge("badge");

    public final NumberPath<Long> badgeId = createNumber("badgeId", Long.class);

    public final StringPath name = createString("name");

    public final ListPath<UserBadge, QUserBadge> userBadges = this.<UserBadge, QUserBadge>createList("userBadges", UserBadge.class, QUserBadge.class, PathInits.DIRECT2);

    public QBadge(String variable) {
        super(Badge.class, forVariable(variable));
    }

    public QBadge(Path<? extends Badge> path) {
        super(path.getType(), path.getMetadata());
    }

    public QBadge(PathMetadata metadata) {
        super(Badge.class, metadata);
    }

}

