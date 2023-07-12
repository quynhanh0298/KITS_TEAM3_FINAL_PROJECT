package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.Domain.Category;
import edu.kits.finalproject.Repository.CategoryPepository;
import edu.kits.finalproject.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryPepository categoryPepository;
    @Override
    public List<Category> getAllCategory() {
        return categoryPepository.findAll();
    }
}
