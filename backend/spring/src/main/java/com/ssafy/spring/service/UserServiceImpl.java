package com.ssafy.spring.service;

import com.ssafy.spring.model.dto.UserDTO;
import com.ssafy.spring.model.entity.User;
import com.ssafy.spring.model.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {

    private final UserRepository userRepo;

    @Override
    public User getUserByUserId(String id) {
        Optional<User> find = userRepo.findByUserId(id);
        if(find.isPresent()) {
            return find.get();
        }
        return null;
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

    @Override
    @Transactional
    public Boolean deleteUserByUserId(String id) {
        Optional<User> user = userRepo.findByUserId(id);
        if(user.isPresent()) {
            userRepo.deleteById(user.get().getUserId());
            return true;
        }
        return false;
    }

    @Override
    public User getUserById(Long userId) {
        Optional<User> find = userRepo.findById(userId);
        if(find.isPresent()) {
            return find.get();
        }
        return null;
    }

    @Override
    @Transactional
    public Long modify(String id, UserDTO.SignupPostReq modifyInfo) {
        User user = getUserByUserId(id);
        if(user == null) {
            return null;
        }
        user.modify(modifyInfo);
        return user.getUserId();
    }
}
