package com.ssafy.spring.service;

import com.ssafy.spring.model.dto.RankingDTO;
import com.ssafy.spring.model.dto.UserDTO;
import com.ssafy.spring.model.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User getUserByUserId(String id);
    Long createUser(UserDTO.SignupPostReq signupInfo);
    Boolean deleteUserByUserId(String id);
    User getUserById(Long userId);
    Long modify(String id, UserDTO.SignupPostReq modifyInfo);
    List<RankingDTO> getRanking();
}
