package edu.kits.finalproject.onlinelearningwebapp.service;

import edu.kits.finalproject.onlinelearningwebapp.entity.Course;

import java.util.Optional;

public interface CourseService {
    Optional<Course> findById(Long id);

    Course save(Course course);

    Optional<Course> findByCategoryId(Long categoryId);
}
