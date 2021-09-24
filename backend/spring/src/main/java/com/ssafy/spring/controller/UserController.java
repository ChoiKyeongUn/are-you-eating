package com.ssafy.spring.controller;

import com.ssafy.spring.common.auth.UserDetailsImpl;
import com.ssafy.spring.common.util.JwtTokenProvider;
import com.ssafy.spring.model.dto.UserDTO;
import com.ssafy.spring.model.entity.User;
import com.ssafy.spring.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @PostMapping("/signin")
    @Operation(summary = "로그인", description = "아이디와 패스워드를 입력하여 로그인한다.", responses = {
            @ApiResponse(responseCode = "200", description = "로그인 성공"),
            @ApiResponse(responseCode = "401", description = "계정이 존재하지 않거나 일치하지 않는 비밀번호"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<UserDTO.SigninPostRes> signin(@Parameter(name = "로그인 정보", required = true) @RequestBody UserDTO.SigninPostReq loginInfo) {
        String id = loginInfo.getId();
        String pwd = loginInfo.getPassword();

        User user = userService.getUserByUserId(id);
        if(user == null) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        if(new BCryptPasswordEncoder().matches(pwd, user.getPassword()) == false) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity(
                new UserDTO.SigninPostRes(JwtTokenProvider.generateToken(new UserDetailsImpl(user)), user.getIsLoggedIn()),
                HttpStatus.OK
        );
    }

    @GetMapping("/checkId")
    @Operation(summary = "아이디 중복검사", description = "아이디와 패스워드를 입력하여 로그이한다.", responses = {
            @ApiResponse(responseCode = "200", description = "중복 x"),
            @ApiResponse(responseCode = "409", description = "중복된 아이디"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<Boolean> checkId(@Parameter(name = "id", required = true) @RequestBody String id) {
        User confirmUser = userService.getUserByUserId(id);
        if(confirmUser == null) {
            return new ResponseEntity<>(false, HttpStatus.OK);
        }
        return new ResponseEntity<>(true, HttpStatus.CONFLICT);
    }

    @PostMapping("/signup")
    @Operation(summary = "회원 가입", description = "필요한 정보를 입력하여 회원가입 한다.", responses = {
            @ApiResponse(responseCode = "201", description = "성공"),
            @ApiResponse(responseCode = "409", description = "중복된 계정 오류"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<Void> signup(@Parameter(name = "회원가입 정보", required = true) @RequestBody UserDTO.SignupPostReq signupInfo) {
        if(checkId(signupInfo.getId()).getStatusCode() == HttpStatus.CONFLICT) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Long id = userService.createUser(signupInfo);
        if(id == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }
}