package edu.kits.finalproject.onlinelearningwebapp.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class CourseDetailKey implements Serializable {

    @Column(name = "user_id")
    Long userId;
    @Column(name = "course_id")
    Long courseId;
}
