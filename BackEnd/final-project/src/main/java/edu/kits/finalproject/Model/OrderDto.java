package edu.kits.finalproject.Model;

import edu.kits.finalproject.Domain.Course;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto implements Serializable {
    private Long orderId;
    private String paymentId;
    private String paymentMail;
    private List<CourseDto> courses;
    private Date orderDate;
    private double amount;
}
