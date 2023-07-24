package edu.kits.finalproject.onlinelearningwebapp.controller;

import edu.kits.finalproject.onlinelearningwebapp.entity.Course;
import edu.kits.finalproject.onlinelearningwebapp.entity.ResponseObject;
import edu.kits.finalproject.onlinelearningwebapp.repository.CourseRepository;
import edu.kits.finalproject.onlinelearningwebapp.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/Courses")
public class CourseController {
    @Autowired
    CourseService courseService;

    //Get Course by Category

    //Get Course detail
    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> findById(@PathVariable Long id) {
        Optional<Course> foundCourse = courseService.findById(id);
        if (foundCourse.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject(200, "Query course successfully", foundCourse)
            );
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject(404, "Can not find course with id = " + id, "")
            );
        }
    }

    //Insert new course with POST method: This is when tutor add new course
    @PostMapping("/insert")
    ResponseEntity<ResponseObject> insertCourse(@RequestBody Course course) {
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200, "Insert Course successfully", courseService.save(course))
        );
    }

    //Update course
    @PutMapping("/{id}")
    ResponseEntity<ResponseObject> updateCourse(@PathVariable("id") Long id, @RequestBody Course newCourse) {
        Optional<Course> updatedCourse = courseService.findById(id)
                .map(course -> {
                    course.setName(newCourse.getName());
                    course.setDescription(newCourse.getDescription());
                    course.setPrice(newCourse.getPrice());
                    return courseService.save(course);
                });
        return updatedCourse.isPresent() ?
                ResponseEntity.status(HttpStatus.OK).body(
                        new ResponseObject(200, "Update course successfully", updatedCourse)
                )
                :
                ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new ResponseObject(404, "Can not find course with id = " + id, "")
                );
    }

    //Delete a course => Delete method

    //Get course by category_id:
    @GetMapping("/course-by-category-id/{category_id}")
    ResponseEntity<ResponseObject> getCourseByCategoryId(@PathVariable Long category_id) {
        Optional<Course> foundCourse = courseService.findByCategoryId(category_id);
        if (foundCourse.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject(200, "Query course successfully", foundCourse)
            );
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject(404, "Can not find course with id = " + category_id, "")
            );
        }
    }
    //
}
