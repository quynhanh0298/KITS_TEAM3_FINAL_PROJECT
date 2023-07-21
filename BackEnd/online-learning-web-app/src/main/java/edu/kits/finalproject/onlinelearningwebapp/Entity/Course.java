package edu.kits.finalproject.onlinelearningwebapp.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "course")
public class Course {
    //Course: id, name, desc, rating, reviews, enrollCount, user_id, content_id,
    // 1 course has 1 tutor, 1 tutor can have many course, 1 student can join many course,
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private double price;
    private String description;

    @OneToMany(mappedBy = "course")
    Set<CourseDetail> courseDetails;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

}
