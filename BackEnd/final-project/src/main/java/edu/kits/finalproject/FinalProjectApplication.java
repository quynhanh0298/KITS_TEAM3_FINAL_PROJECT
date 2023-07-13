package edu.kits.finalproject;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class FinalProjectApplication {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

//    Global CORS configuration
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/admin/categoties").allowedOrigins("http://localhost:3000");
                registry.addMapping("/admin/courses/{id}").allowedOrigins("http://localhost:3000");

            }
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(FinalProjectApplication.class, args);
    }

}
