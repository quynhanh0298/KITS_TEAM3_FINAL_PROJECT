package edu.kits.finalproject.Repository;

import edu.kits.finalproject.Domain.OnlineClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OnlineClassRepository extends JpaRepository<OnlineClass, Long> {
}
