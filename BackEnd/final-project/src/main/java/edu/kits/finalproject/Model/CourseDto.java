package edu.kits.finalproject.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseDto implements Serializable {
    private Long courseId;
    private String name;
    private double price;
    private String desciption;
    private String thumbnail;
    private double rating;
    private int enroll;
    private int active;
    private Date created_at;
    private CategoryDto categoryDto;
    private List<UserDto> userDtos;
}
