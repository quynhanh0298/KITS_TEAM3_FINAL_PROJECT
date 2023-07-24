package edu.kits.finalproject.Service;

import edu.kits.finalproject.entity.Order;

import java.io.IOException;
import java.util.Date;

public interface OrderService {
    Order store(String orderId, Date orderDate, double amount, String status, String courses) throws IOException;

    Order getOrderById(String orderId);

}
