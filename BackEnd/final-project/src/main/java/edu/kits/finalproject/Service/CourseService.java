package edu.kits.finalproject.Service;

import edu.kits.finalproject.Domain.Course;
import edu.kits.finalproject.Repository.CoursePepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

public interface CourseService{

    List<Course> getAllCourses();

    Course getCourseById(Long id);
}
