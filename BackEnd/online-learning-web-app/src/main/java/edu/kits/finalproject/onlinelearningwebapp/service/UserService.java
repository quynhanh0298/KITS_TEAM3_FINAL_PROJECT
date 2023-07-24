package edu.kits.finalproject.onlinelearningwebapp.service;


import edu.kits.finalproject.onlinelearningwebapp.entity.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findById(Long id);

    User save(User user);
}
