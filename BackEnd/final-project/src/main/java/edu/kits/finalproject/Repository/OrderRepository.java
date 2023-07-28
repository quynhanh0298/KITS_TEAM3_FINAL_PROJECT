package edu.kits.finalproject.Repository;

import edu.kits.finalproject.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, String> {
    Optional<Order> findByUserMail(String userMail);
}
