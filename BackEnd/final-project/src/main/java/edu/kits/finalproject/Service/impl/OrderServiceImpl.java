package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.Repository.OrderRepository;
import edu.kits.finalproject.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;
}
