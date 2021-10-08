package com.ssafy.spring.controller;

import com.ssafy.spring.common.auth.UserDetailsImpl;
import com.ssafy.spring.common.util.JwtTokenProvider;
import com.ssafy.spring.model.dto.CategoryDTO;
import com.ssafy.spring.model.dto.RankingDTO;
import com.ssafy.spring.model.dto.UserDTO;
import com.ssafy.spring.model.entity.User;
import com.ssafy.spring.service.UserCategoryService;
import com.ssafy.spring.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final UserCategoryService userCategoryService;

    @PostMapping("/signin")
    @Operation(summary = "로그인", description = "아이디와 패스워드를 입력하여 로그인한다.", responses = {
            @ApiResponse(responseCode = "200", description = "로그인 성공"),
            @ApiResponse(responseCode = "401", description = "계정이 존재하지 않거나 일치하지 않는 비밀번호"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<UserDTO.SigninPostRes> signIn(@Parameter(name = "로그인 정보", required = true) @RequestBody UserDTO.SigninPostReq signinInfo) {
        String id = signinInfo.getId();
        String pwd = signinInfo.getPassword();

        User user = userService.getUserByUserId(id);
        if(user == null) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        if(new BCryptPasswordEncoder().matches(pwd, user.getPassword()) == false) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity(
                new UserDTO.SigninPostRes(JwtTokenProvider.generateToken(new UserDetailsImpl(user)), user.getIsLoggedIn(), user.getUserId(), user.getNickname()),
                HttpStatus.OK
        );
    }

    @GetMapping("/checkId")
    @Operation(summary = "아이디 중복검사", description = "아이디를 입력하여 중복체크를 한다.", responses = {
            @ApiResponse(responseCode = "200", description = "중복 x"),
            @ApiResponse(responseCode = "409", description = "중복된 아이디"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<Boolean> checkId(@Parameter(name = "id", description = "중복체크할 아이디", example = "ssafy1234", required = true) @RequestParam(name = "id") String id) {
        System.out.println(id);
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

    @DeleteMapping("deactivate")
    @Operation(summary = "회원 탈퇴", description = "회원의 정보를 삭제한다.", responses = {
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "401", description = "인증 실패"),
            @ApiResponse(responseCode = "403", description = "토큰 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<Void> deleteUser(@Parameter(hidden = true) Authentication authentication) {

        ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
        if(userDetailsResponseEntity.getBody() == null) {
            return new ResponseEntity<>(userDetailsResponseEntity.getStatusCode());
        }

        UserDetailsImpl userDetails = userDetailsResponseEntity.getBody();

        boolean flag = userService.deleteUserByUserId(userDetails.getUsername());
        if(!flag) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("")
    @Operation(summary = "마이페이지", description = "자신의 정보를 조회한다.", responses = {
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "401", description = "인증 실패"),
            @ApiResponse(responseCode = "403", description = "토큰 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<UserDTO> getProfileMyself(@Parameter(hidden = true) Authentication authentication) {
        ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
        if(userDetailsResponseEntity.getBody() == null) {
            return new ResponseEntity<>(null, userDetailsResponseEntity.getStatusCode());
        }

        UserDetailsImpl userDetails = userDetailsResponseEntity.getBody();
        return new ResponseEntity<>(new UserDTO(userService.getUserByUserId(userDetails.getUsername())), HttpStatus.OK);
    }

    @GetMapping("/{userId}/profile")
    @Operation(summary = "다른 회원 정보 검색", description = "다른 회원의 정보를 검색한다", responses = {
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "401", description = "인증 실패"),
            @ApiResponse(responseCode = "403", description = "토큰 없음"),
            @ApiResponse(responseCode = "409", description = "해당 회원 정보 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<UserDTO> getProfile(@Parameter(hidden = true) Authentication authentication,
                                              @PathVariable("userId") Long userId) {
        ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
        if(userDetailsResponseEntity.getBody() == null) {
            return new ResponseEntity<>(null, userDetailsResponseEntity.getStatusCode());
        }

        User find = userService.getUserById(userId);
        if(find == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(new UserDTO(find), HttpStatus.OK);
    }

    @PatchMapping("")
    @Operation(summary = "회원 정보 수정", description = "회원의 정보를 수정한다.", responses = {
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "401", description = "인증 실패"),
            @ApiResponse(responseCode = "403", description = "토큰 없음"),
            @ApiResponse(responseCode = "409", description = "해당 회원 정보 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<UserDTO> modifyProfile(@Parameter(hidden = true) Authentication authentication,
                                                 @Parameter(name = "수정할 정보", required = true) @RequestBody UserDTO.ModifyPostReq modifyInfo) {
        ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
        if(userDetailsResponseEntity.getBody() == null) {
            return new ResponseEntity<>(null, userDetailsResponseEntity.getStatusCode());
        }
        Long userId = userService.modify(userDetailsResponseEntity.getBody().getUsername(), modifyInfo);
        if(userId == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(new UserDTO(userService.getUserById(userId)), HttpStatus.OK);
    }

    @PostMapping("/category")
    @Operation(summary = "선호 카테고리 등록", description = "회원의 선호 카테고리를 등록한다.", responses = {
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "401", description = "인증 실패"),
            @ApiResponse(responseCode = "403", description = "토큰 없음"),
            @ApiResponse(responseCode = "409", description = "해당 회원 정보 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<Void> registerCategory(@Parameter(hidden = true) Authentication authentication,
                                                 @Parameter(name = "등록할 선호 카테고리들", required = true) @RequestBody CategoryDTO.RegisterCategoryReq req) {
        ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
        if(userDetailsResponseEntity.getBody() == null) {
            return new ResponseEntity<>(null, userDetailsResponseEntity.getStatusCode());
        }

        return new ResponseEntity<>(userCategoryService.save(userDetailsResponseEntity.getBody().getUsername(), req.getCategories()));
    }

    @GetMapping("/ranking")
    @Operation(summary = "리뷰 랭킹 조회", description = "리뷰왕 랭킹 상위 10명을 조회한다.", responses = {
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "401", description = "인증 실패"),
            @ApiResponse(responseCode = "403", description = "토큰 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")})
    public ResponseEntity<List<RankingDTO>> ranking(@Parameter(hidden = true) Authentication authentication) {
        ResponseEntity<UserDetailsImpl> userDetailsResponseEntity = JwtTokenProvider.judgeAuthorization(authentication);
        if(userDetailsResponseEntity.getBody() == null) {
            return new ResponseEntity<>(null, userDetailsResponseEntity.getStatusCode());
        }

        return new ResponseEntity<>(userService.getRanking(), HttpStatus.OK);
    }
}