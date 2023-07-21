package edu.kits.finalproject.onlinelearningwebapp.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "nvarchar(150) not null")
    private String name;
    @Column(columnDefinition = "nvarchar(150) not null", unique = true)
    private String email;
    @Column(columnDefinition = "nvarchar(100) not null")
    private String password;
    @ManyToOne()
    @JoinColumn(name = "role_id")
    private Role role;

    @OneToMany(mappedBy = "user")
    Set<CourseDetail> courseDetails;

}
