package edu.kits.finalproject.onlinelearningwebapp.Controller;

import edu.kits.finalproject.onlinelearningwebapp.Entity.Category;
import edu.kits.finalproject.onlinelearningwebapp.Payload.ResponseObject;
import edu.kits.finalproject.onlinelearningwebapp.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/Categories")
public class CategoryController {
    @Autowired
    CategoryRepository repository;

    //Insert new category with POST method
    @PostMapping("/insert")
    ResponseEntity<ResponseObject> insertCategory(@RequestBody Category category) {
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200, "Insert category successfully", repository.save(category))
        );
    }
}
