package com.ssafy.spring.service;

import com.ssafy.spring.model.dto.UserDTO;
import com.ssafy.spring.model.entity.User;
import com.ssafy.spring.model.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {

    private final UserRepository userRepo;

    @Override
    public User getUserByUserId(String id) {
        return userRepo.findByUserId(id);
    }

    @Override
    @Transactional
    public Long createUser(UserDTO.SignupPostReq signupInfo) {
        User user = User.builder()
                .id(signupInfo.getId())
                .nickname(signupInfo.getNickname())
                .gender(signupInfo.getGender())
                .birth(signupInfo.getBirth())
                .address(signupInfo.getAddress())
                .latitude(signupInfo.getLatitude())
                .longitude(signupInfo.getLongitude())
                .password(new BCryptPasswordEncoder().encode(signupInfo.getPassword()))
                .isLoggedIn(false)
                .build();
        user = userRepo.save(user);
        return user.getUserId();
    }
}
