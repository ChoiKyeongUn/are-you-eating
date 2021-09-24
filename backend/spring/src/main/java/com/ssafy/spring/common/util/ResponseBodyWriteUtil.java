package com.ssafy.spring.common.util;

import com.google.common.collect.ImmutableMap;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.http.HttpStatus;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Calendar;
import java.util.Map;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

public class ResponseBodyWriteUtil {
    public static void sendError(HttpServletRequest request, HttpServletResponse response, Exception e, HttpStatus httpStatus) throws IOException {
        response.setStatus(httpStatus.value());
        response.setContentType(APPLICATION_JSON_VALUE);
        response.setCharacterEncoding("UTF-8");
        String message = e.getMessage();
        message = message == null ? "" : message;
        Map<String, Object> data = ImmutableMap.of(
                "timestamp", Calendar.getInstance().getTime(),
                "statusCode", httpStatus.value(),
                "error", e.getClass().getSimpleName(),
                "message", message,
                "path", request.getRequestURI()
        );
        PrintWriter pw = response.getWriter();
        pw.print(new ObjectMapper().writeValueAsString(data));
        pw.flush();
    }

    public static void sendError(HttpServletRequest request, HttpServletResponse response, Exception e) throws IOException {
        sendError(request, response, e, HttpStatus.UNAUTHORIZED);
    }
}
