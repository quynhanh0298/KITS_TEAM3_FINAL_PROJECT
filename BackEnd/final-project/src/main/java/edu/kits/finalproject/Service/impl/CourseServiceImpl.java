package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.Domain.Course;
import edu.kits.finalproject.Repository.CoursePepository;
import edu.kits.finalproject.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private CoursePepository coursePepository;

    @Override
    public List<Course> getAllCourses() {
        return coursePepository.findAll();
    }

    @Override
    public Course getCourseById(Long id) {
        Optional<Course> result = coursePepository.findById(id);
        if(result.isPresent())
            return result.get();
        return new Course();
    }

//    @Override
//    public Collection<Object> getAllCategory() {
//        return coursePepository.findAll();
//    }
}
