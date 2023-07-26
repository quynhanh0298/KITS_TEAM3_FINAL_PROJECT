package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.Repository.UserRepository;
import edu.kits.finalproject.Service.UserMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserMailServiceImpl implements UserMailService {
    @Autowired
    UserRepository userRepository;
}
