package edu.kits.finalproject.onlinelearningwebapp.Controller;

import edu.kits.finalproject.onlinelearningwebapp.Entity.Course;
import edu.kits.finalproject.onlinelearningwebapp.Payload.ResponseObject;
import edu.kits.finalproject.onlinelearningwebapp.Repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/Courses")
public class CourseController {
    @Autowired
    CourseRepository repository;

    //Get Course by Category

    //Get Course detail
    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> findById(@PathVariable Long id) {
        Optional<Course> foundCourse = repository.findById(id);
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
                new ResponseObject(200, "Insert Course successfully", repository.save(course))
        );
    }

    //Update course
    @PutMapping("/{id}")
    ResponseEntity<ResponseObject> updateCourse(@PathVariable("id") Long id, @RequestBody Course newCourse) {
        Optional<Course> updatedCourse = repository.findById(id)
                .map(course -> {
                    course.setName(newCourse.getName());
                    course.setDescription(newCourse.getDescription());
                    course.setPrice(newCourse.getPrice());
                    return repository.save(course);
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
}
