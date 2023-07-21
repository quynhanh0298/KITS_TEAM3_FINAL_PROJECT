package edu.kits.finalproject.onlinelearningwebapp.Service;


import edu.kits.finalproject.onlinelearningwebapp.Entity.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findById(Long id);

    User save(User user);
}
