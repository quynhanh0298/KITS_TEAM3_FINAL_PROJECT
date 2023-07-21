package edu.kits.finalproject.onlinelearningwebapp.Config;

import edu.kits.finalproject.onlinelearningwebapp.Filter.JWTFilter;
import edu.kits.finalproject.onlinelearningwebapp.Provider.CustomAuthenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AuthorizeHttpRequestsConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig  {
    //khai bao chuan ma hoa Bcrypt va luu tren IOC
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }


    @Autowired
    private CustomAuthenProvider customAuthProvider;

    @Autowired
    private JWTFilter jwtFilter;

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity httpSecurity) throws Exception{
        return
                httpSecurity.getSharedObject(AuthenticationManagerBuilder.class)
                        //khai bao custom details service
//                .userDetailsService(customUserDetailService)
//                //khai bao chuan ma hoa pass
//                .passwordEncoder(passwordEncoder())
                        .authenticationProvider(customAuthProvider)
//                .and()
                        .build();
    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable() //tat cau hinh tan cong csrf
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()//quy dinh rule xac thuc nguoi dung
                .antMatchers("/signin","/signup","/demo/**","/user","/user/**","/movies/**").permitAll()//java 11 la antMatcher,17 la requestAntmatcher

//                    .anyRequest().authenticated()//cac route con lai bi chan
                .and()
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
}
