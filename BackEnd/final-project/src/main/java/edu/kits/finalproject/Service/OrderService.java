package edu.kits.finalproject.Service;

import edu.kits.finalproject.Domain.Course;
import edu.kits.finalproject.Domain.Order;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;

public interface OrderService {
    Order store(Long orderId, Date orderDate, double amount, short status, String courses) throws IOException;
}
