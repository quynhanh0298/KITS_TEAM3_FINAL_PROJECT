package edu.kits.finalproject.onlinelearningwebapp.service;

import edu.kits.finalproject.onlinelearningwebapp.entity.Category;

import java.util.List;

public interface CategoryService {

    Object save(Category category);

    List<Category> getLatestCategories();
}
