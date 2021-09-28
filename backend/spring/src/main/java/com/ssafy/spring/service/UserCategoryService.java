package com.ssafy.spring.service;

import org.springframework.http.HttpStatus;

import java.util.List;

public interface UserCategoryService {
    HttpStatus save(String id, List<String> categories);
}