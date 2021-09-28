package com.ssafy.spring.service;

import com.ssafy.spring.model.dto.UserCategoryDTO;
import com.ssafy.spring.model.entity.Category;
import com.ssafy.spring.model.entity.User;
import com.ssafy.spring.model.entity.UserCategory;
import com.ssafy.spring.model.repository.CategoryRepository;
import com.ssafy.spring.model.repository.UserCategoryRepository;
import com.ssafy.spring.model.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserCategoryServiceImpl implements UserCategoryService {

    private final UserRepository userRepository;
    private final UserCategoryRepository userCategoryRepository;
    private final CategoryRepository categoryRepository;

    @Override
    @Transactional
    public HttpStatus save(String id, List<String> categories) {
        Optional<User> findUser = userRepository.findByUserId(id);
        if(!findUser.isPresent()) {
            return HttpStatus.NOT_FOUND;
        }
        User user = findUser.get();
        user.setIsLoggedIn(true);
        for(String c: categories) {
            Optional<Category> findCategory = categoryRepository.findByName(c);
            if(!findCategory.isPresent()) {
                return HttpStatus.INTERNAL_SERVER_ERROR;
            }
            Category category = findCategory.get();
            UserCategory userCategory = UserCategory.builder().user(user).category(category).build();
            userCategoryRepository.save(userCategory);
        }
        return HttpStatus.OK;
    }
}