package edu.kits.finalproject.onlinelearningwebapp.Filter;

import edu.kits.finalproject.onlinelearningwebapp.Utils.JWTHelper;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

@Component
public class JWTFilter extends OncePerRequestFilter {

    @Autowired
    JWTHelper jwtHelper;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            String header = request.getHeader("Authorization");
            if (header.startsWith("Bearer ")) {
                String token = header.substring(7);
//          System.out.println(token);
                Claims claims = jwtHelper.decodeToken(token);
                if (claims != null) {
                    //tao chung thuc cho Security
                    SecurityContext context = SecurityContextHolder.getContext();
                    UsernamePasswordAuthenticationToken user = new UsernamePasswordAuthenticationToken(claims.getSubject(), "", new ArrayList<>());
                    context.setAuthentication(user);
                }
            }
        } catch (Exception e) {

        }

        filterChain.doFilter(request, response);
    }

}
