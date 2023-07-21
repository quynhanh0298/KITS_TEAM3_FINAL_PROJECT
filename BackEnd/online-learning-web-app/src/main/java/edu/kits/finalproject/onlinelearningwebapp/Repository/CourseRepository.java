package edu.kits.finalproject.onlinelearningwebapp.Repository;

import edu.kits.finalproject.onlinelearningwebapp.Entity.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course,Long> {
    List<Course> findByNameContaining(String name);
    Page<Course> findByNameContaining(String name, Pageable pageable);
}
