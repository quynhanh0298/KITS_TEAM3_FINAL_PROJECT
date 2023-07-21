package edu.kits.finalproject.onlinelearningwebapp.Service.Impl;

import edu.kits.finalproject.onlinelearningwebapp.Entity.User;
import edu.kits.finalproject.onlinelearningwebapp.Repository.UserRepository;
import edu.kits.finalproject.onlinelearningwebapp.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public Optional<User> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public User save(User user) {
        return null;
    }
}
