package edu.kits.finalproject.onlinelearningwebapp.Repository;

import edu.kits.finalproject.onlinelearningwebapp.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
