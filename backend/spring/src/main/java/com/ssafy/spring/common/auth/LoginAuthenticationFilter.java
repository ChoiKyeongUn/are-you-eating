package com.ssafy.spring.common.auth;

import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.ssafy.spring.common.util.JwtTokenProvider;
import com.ssafy.spring.common.util.ResponseBodyWriteUtil;
import com.ssafy.spring.model.entity.User;
import com.ssafy.spring.service.UserService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginAuthenticationFilter extends BasicAuthenticationFilter {

    private UserService userService;

    public LoginAuthenticationFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }

    public LoginAuthenticationFilter(AuthenticationManager authenticationManager, UserService userService) {
        super(authenticationManager);
        this.userService = userService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        String header = request.getHeader(JwtTokenProvider.HEADER_STRING);

        if(header == null || !header.startsWith(JwtTokenProvider.TOKEN_PREFIX)) {
            chain.doFilter(request, response);
            return;
        }

        try {
            JWTVerifier verifier = JwtTokenProvider.getVerifier();
            DecodedJWT decodedJWT = verifier.verify(header.replace(JwtTokenProvider.TOKEN_PREFIX, ""));
            String id = decodedJWT.getSubject();

            User user = userService.getUserByUserId(id);
            UserDetailsImpl userDetails = new UserDetailsImpl(user);

            UsernamePasswordAuthenticationToken jwtAuthToken = new UsernamePasswordAuthenticationToken(id, decodedJWT.getClaim("USER_ROLE"), userDetails.getAuthorities());
            jwtAuthToken.setDetails(userDetails);

            SecurityContextHolder.getContext().setAuthentication(jwtAuthToken);
        } catch(SecurityException e) {
            ResponseBodyWriteUtil.sendError(request, response, e);
        } catch(IllegalArgumentException e) {
            ResponseBodyWriteUtil.sendError(request, response, e);
        } catch(JWTDecodeException e) {
            ResponseBodyWriteUtil.sendError(request, response, e);
        } catch(JWTVerificationException e) {
            ResponseBodyWriteUtil.sendError(request, response, e);
        } catch(Exception e) {
            ResponseBodyWriteUtil.sendError(request, response, e);
        }

        chain.doFilter(request, response);
    }
}
