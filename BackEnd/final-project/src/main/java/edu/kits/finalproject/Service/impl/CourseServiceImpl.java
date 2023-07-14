package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.Domain.Course;
import edu.kits.finalproject.Repository.CourseRepository;
import edu.kits.finalproject.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private CourseRepository coursePepository;

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

    @Override
    public Course store(String name, double price, String description, MultipartFile file, double rating, int enroll) throws IOException {
        Course course = new Course(name, price, description, file.getBytes(), rating, enroll);
        System.out.println(name);
        return coursePepository.save(course);
    }

//    @Override
//    public Collection<Object> getAllCategory() {
//        return coursePepository.findAll();
//    }
}
