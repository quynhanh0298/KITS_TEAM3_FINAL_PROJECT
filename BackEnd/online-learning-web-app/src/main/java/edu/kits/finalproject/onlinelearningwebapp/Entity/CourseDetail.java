package edu.kits.finalproject.onlinelearningwebapp.Entity;

import javax.persistence.*;

@Entity
@Table(name = "course_detail")
public class CourseDetail {
    @EmbeddedId
    CourseDetailKey id;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @MapsId("courseId")
    @JoinColumn(name = "course_id")
    Course course;

    @Column(name = "rating")
    private int rating;
    @Column(name = "review")
    private String review;
}
