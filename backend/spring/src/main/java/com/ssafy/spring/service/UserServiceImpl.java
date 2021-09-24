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
    public Long createUser(UserDTO.JoinPostReq joinInfo) {
        User user = User.builder()
                .id(joinInfo.getId())
                .nickname(joinInfo.getNickname())
                .gender(joinInfo.getGender())
                .birth(joinInfo.getBirth())
                .address(joinInfo.getAddress())
                .latitude(joinInfo.getLatitude())
                .longitude(joinInfo.getLongitude())
                .password(new BCryptPasswordEncoder().encode(joinInfo.getPassword()))
                .build();
        user = userRepo.save(user);
        return user.getUserId();
    }
}
