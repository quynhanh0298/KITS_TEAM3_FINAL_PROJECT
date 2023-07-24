package edu.kits.finalproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Courses")
public class Course implements Serializable {

    //Course: id, name, desc, rating,listOfVideo,thumbnail, reviews, enrollCount, user_id, content_id,
    // 1 course has 1 tutor, 1 tutor can have many course, 1 student can join many course,
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseId;

    @Column(columnDefinition = "nvarchar(100) not null")
    private String name;

    @Column
    private double price;

    @Column(columnDefinition = "nvarchar(500)")
    private String desciption;

    @Column(columnDefinition = "nvarchar(500)")
    private String thumbnail;




    @Column(columnDefinition = "nvarchar(500)")
    private String listOfVideo;

    @Column
    private double rating;

    @Column
    private int enroll;

    @Column
    @ColumnDefault(value = "1")
    private int active;

    @Temporal(TemporalType.DATE)
    private Date created_at;


    @OneToMany(mappedBy = "course")
    Set<CourseDetail> courseDetails;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;


    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.MERGE,
                    CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinTable(
            name = "user_course",
            joinColumns = @JoinColumn(name = "courseId"),
            inverseJoinColumns = @JoinColumn(name = "userId"))
    private List<User> users;



    public Course(String name, double price, String desciption, String thumbnail, double rating, int enroll, String listOfVideo) {
        this.name = name;
        this.price = price;
        this.desciption = desciption;
        this.thumbnail = thumbnail;
        this.rating = rating;
        this.enroll = enroll;
        this.listOfVideo = listOfVideo;
    }

    public List<User> getUsers() {
        return users;
    }
}
