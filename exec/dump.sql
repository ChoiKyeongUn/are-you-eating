use eatrice;
CREATE TABLE `user` (
  `user_id` bigint NOT NULL AUTO_INCREMENT COMMENT '유저 기본키',
  `id` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '유저 아이디',
  `password` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nickname` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '별명',
  `gender` char(5) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '성별',
  `birth` date NOT NULL COMMENT '생년월일',
  `address` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '주소',
  `latitude` float DEFAULT NULL COMMENT '위도',
  `longitude` float DEFAULT NULL COMMENT '경도',
  `is_loggedin` tinyint DEFAULT '0' COMMENT '첫 로그인 여부',
  `profile_path` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UQ_User_1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='사용자';

CREATE TABLE `category` (
  `category_id` bigint NOT NULL AUTO_INCREMENT COMMENT '카테고리 기본키',
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '카테고리 이름',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='카테고리';

CREATE TABLE `user_category` (
  `user_category_id` bigint NOT NULL AUTO_INCREMENT COMMENT '유저-카테고리 기본키',
  `user_id` bigint NOT NULL COMMENT '유저 기본키',
  `category_id` bigint NOT NULL COMMENT '카테고리 기본키',
  PRIMARY KEY (`user_category_id`),
  KEY `FK_user_category_user_id_user_user_id` (`user_id`),
  KEY `FK_user_category_category_id_category_category_id` (`category_id`),
  CONSTRAINT `FK_user_category_category_id_category_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user_category_user_id_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='유저 선호 카테고리';

CREATE TABLE `store` (
  `store_id` bigint NOT NULL AUTO_INCREMENT COMMENT '음식점 기본키',
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '음식점 이름',
  `branch` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT 'None' COMMENT '프랜차이즈 지점 이름',
  `area` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '음식점 위치',
  `tel` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '전화번호',
  `address` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '주소',
  `latitude` float DEFAULT NULL COMMENT '위도',
  `longitude` float DEFAULT NULL COMMENT '경도',
  `img_url` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`store_id`)
) ENGINE=InnoDB AUTO_INCREMENT=580910 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='음식점';

CREATE TABLE `store_category` (
  `store_category_id` bigint NOT NULL AUTO_INCREMENT COMMENT '음식점-카테고리 기본키',
  `store_id` bigint NOT NULL COMMENT '음식점 기본키',
  `category_id` bigint NOT NULL COMMENT '카테고리 기본키',
  PRIMARY KEY (`store_category_id`),
  KEY `FK_store_category_store_id_store_store_id` (`store_id`),
  KEY `FK_store_category_category_id_category_category_id` (`category_id`),
  CONSTRAINT `FK_store_category_category_id_category_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_store_category_store_id_store_store_id` FOREIGN KEY (`store_id`) REFERENCES `store` (`store_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=378021 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='음식점 카테고리';

CREATE TABLE `menu` (
  `menu_id` bigint NOT NULL AUTO_INCREMENT COMMENT '메뉴 기본키',
  `store_id` bigint NOT NULL COMMENT '음식점 기본키',
  `name` varchar(260) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '메뉴 이름',
  `price` int DEFAULT NULL COMMENT '가격',
  PRIMARY KEY (`menu_id`),
  KEY `FK_menu_store_id_store_store_id` (`store_id`),
  CONSTRAINT `FK_menu_store_id_store_store_id` FOREIGN KEY (`store_id`) REFERENCES `store` (`store_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5105740 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='메뉴';

CREATE TABLE `review` (
  `review_id` bigint NOT NULL AUTO_INCREMENT COMMENT '리뷰 기본키',
  `store_id` bigint NOT NULL COMMENT '음식점 기본키',
  `user_id` bigint DEFAULT NULL COMMENT '유저 기본키',
  `score` int NOT NULL COMMENT '평점',
  `content` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reg_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '리뷰 작성 시간',
  PRIMARY KEY (`review_id`),
  KEY `FK_review_store_id_store_store_id` (`store_id`),
  KEY `FK_review_user_id_user_user_id` (`user_id`),
  CONSTRAINT `FK_review_store_id_store_store_id` FOREIGN KEY (`store_id`) REFERENCES `store` (`store_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_review_user_id_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=93085 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='리뷰';





