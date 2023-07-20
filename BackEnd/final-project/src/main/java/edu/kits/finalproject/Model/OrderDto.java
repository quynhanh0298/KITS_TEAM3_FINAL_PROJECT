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
    private Date orderDate;
    private Long customerId;
    private double amount;
    private short status;
}
