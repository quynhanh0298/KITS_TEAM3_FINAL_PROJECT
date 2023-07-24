package edu.kits.finalproject.onlinelearningwebapp.controller;

import edu.kits.finalproject.onlinelearningwebapp.entity.Category;
import edu.kits.finalproject.onlinelearningwebapp.entity.ResponseObject;
import edu.kits.finalproject.onlinelearningwebapp.repository.CategoryRepository;
import edu.kits.finalproject.onlinelearningwebapp.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/Categories")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    //Insert new category with POST method
    @PostMapping("/insert")
    ResponseEntity<ResponseObject> insertCategory(@RequestBody Category category) {
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200, "Insert category successfully", categoryService.save(category))
        );
    }

    //Get latest categories:
    @GetMapping("/latest-categories")
    ResponseEntity<ResponseObject> getLatestCategories(){
        List<Category> foundCategories = categoryService.getLatestCategories();
        if (foundCategories.size() > 0) {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject(200, "Found " + foundCategories.size() + " latest categories", foundCategories)
            );

        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject(404, "Can not find any latest categories", "")
            );
        }
    }

}
