package com.ssafy.spring.common.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.ssafy.spring.common.auth.UserDetailsImpl;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.stream.Collectors;

@Component
public class JwtTokenProvider {

    private static final Logger logger = LoggerFactory.getLogger(JwtTokenProvider.class);

    private static String secretKey;
    private static int expiryTime;

    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String ISSUER = "mengno5314@naver.com";

    @Autowired
    public JwtTokenProvider(@Value("${jwt.secret}") String secretKey, @Value("${jwt.expiryTime}") int expiryTime) {
        this.secretKey = secretKey;
        this.expiryTime = expiryTime;
    }

    public static void setExpiryTime(int expiryTime) {
        JwtTokenProvider.expiryTime = expiryTime;
    }

    public static JWTVerifier getVerifier() {
        return JWT.require(Algorithm.HMAC512(secretKey.getBytes()))
                .withIssuer(ISSUER)
                .build();
    }

    public static String generateToken(UserDetailsImpl userDetails) {
        String authToken = null;

        try {
            authToken = JWT.create()
                    .withSubject(userDetails.getUsername())
                    .withExpiresAt(new Date(new Date().getTime() + expiryTime))
                    .withIssuer(ISSUER)
                    .withIssuedAt(Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant()))
                    .sign(Algorithm.HMAC512(secretKey.getBytes()));
            return authToken;
        } catch(Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String generateToken(Instant expires, UserDetailsImpl userDetails) {
        String authToken = null;

        String role = userDetails.getAuthorities().stream().map(r -> r.getAuthority()).collect(Collectors.toSet())
                .iterator().next();

        try {
            authToken = JWT.create()
                    .withSubject(userDetails.getUsername())
                    .withExpiresAt(Date.from(expires))
                    .withIssuer(ISSUER)
                    .withIssuedAt(Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant()))
                    .sign(Algorithm.HMAC512(secretKey.getBytes()));
            return authToken;
        } catch(Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static ResponseEntity<UserDetailsImpl> judgeAuthorization(Authentication authentication) {
        if(authentication == null) {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getDetails();
        if(userDetails == null) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(userDetails, HttpStatus.OK);
    }
}
