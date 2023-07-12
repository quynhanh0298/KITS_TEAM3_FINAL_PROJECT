package edu.kits.finalproject.Domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Tutors")
public class Tutor implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tutorId;

    @Column(columnDefinition = "nvarchar(100) not null")
    private String name;

    @Column(nullable = false)
    private String gender;

    @Column
    private String emaill;

    @Column
    private String password;

    @Column
    private int phoneNumber;

    @Column
    private short active;

    @OneToMany(mappedBy = "tutor", cascade = CascadeType.ALL)
    private Set<Course> Courses;

}
