package edu.kits.finalproject.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto implements Serializable {
    private Long userId;
    private String name;
    private String gender;
    private String email;
    private String password;
    private byte phoneNumber;
    private byte active;
    private List<CourseDto> courseDtos;
}
