package edu.kits.finalproject.Domain;

import com.mysql.cj.protocol.ColumnDefinition;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Courses")
public class Course implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseId;

    @Column(columnDefinition = "nvarchar(100) not null")
    private String name;

    @Column
    private double price;

    @Column(columnDefinition = "nvarchar(500)")
    private String desciption;

    @Column(length = 200)
    private String thumbnail;

    @Column
    private double rating;

    @Column
    private int viewed;

    @Column(nullable = false)
    private int active;

    @Temporal(TemporalType.DATE)
    private Date created_at;

    @ManyToOne
    @JoinColumn(name = "tutorId")
    private Tutor tutor;

    @ManyToOne
    @JoinColumn(name = "categoryId")
    private Category category;
}
