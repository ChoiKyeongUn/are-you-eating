package com.ssafy.spring.service;

import com.ssafy.spring.model.dto.UserCategoryDTO;
import org.springframework.http.HttpStatus;

import java.util.List;

public interface UserCategoryService {
    HttpStatus save(String id, List<String> categories);
}