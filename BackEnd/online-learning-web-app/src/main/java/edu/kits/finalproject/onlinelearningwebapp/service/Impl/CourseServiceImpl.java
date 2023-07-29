package edu.kits.finalproject.onlinelearningwebapp.service.Impl;

import edu.kits.finalproject.onlinelearningwebapp.entity.Course;
import edu.kits.finalproject.onlinelearningwebapp.repository.CourseRepository;
import edu.kits.finalproject.onlinelearningwebapp.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    CourseRepository courseRepository;


    @Override
    public Optional<Course> findById(Long id) {
        return courseRepository.findById(id);
    }

    @Override
    public Course save(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Optional<Course> findByCategoryId(Long categoryId) {
        return courseRepository.findByCategoryId(categoryId);
    }
}
