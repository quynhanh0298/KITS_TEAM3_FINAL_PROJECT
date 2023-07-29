package edu.kits.finalproject;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class FinalProjectApplication {

//    @Bean
//    public ModelMapper modelMapper() {
//        return new ModelMapper();
//    }

//    Global CORS configuration
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/admin/courses").allowedOrigins("http://localhost:3000");
//                registry.addMapping("/admin/courses/{id}").allowedOrigins("http://localhost:3000");
//                registry.addMapping("/admin/get-tutor-from-course/{id}").allowedOrigins("http://localhost:3000");
//                registry.addMapping("/admin/order/{orderId}").allowedMethods("GET", "POST", "PUT", "DELETE").allowedOrigins("http://localhost:3000");
//                registry.addMapping("/admin/courses-tutor").allowedOrigins("http://localhost:3000");
//                registry.addMapping("/admin/user/{email}").allowedOrigins("http://localhost:3000");
//                registry.addMapping("/admin/tutor").allowedOrigins("http://localhost:3000");
//                registry.addMapping("/admin/add-course").allowedOrigins("http://localhost:3000");
//
//                registry.addMapping("/admin/order/{mail}").allowedOrigins("http://localhost:3000");
//            }
//        };
//    }

    public static void main(String[] args) {
        SpringApplication.run(FinalProjectApplication.class, args);
    }

}
