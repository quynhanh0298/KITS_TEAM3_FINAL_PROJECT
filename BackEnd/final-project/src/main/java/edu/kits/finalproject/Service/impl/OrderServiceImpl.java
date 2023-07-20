package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.Domain.Order;
import edu.kits.finalproject.Repository.OrderRepository;
import edu.kits.finalproject.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Order store(Long orderId, Date orderDate, double amount, short status, String courses) throws IOException {
        Order order = new Order(orderId, orderDate, amount, status, courses);
        return orderRepository.save(order);
    }
}
