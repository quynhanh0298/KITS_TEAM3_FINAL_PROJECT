package edu.kits.finalproject.Controller.Admin;

import edu.kits.finalproject.Model.CategoryDto;
import edu.kits.finalproject.Model.CourseDto;
import edu.kits.finalproject.Service.CategoryService;
import edu.kits.finalproject.Service.CourseService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.stream.Collectors;

@org.springframework.stereotype.Controller
@RequestMapping("admin")
public class Controller {

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private CourseService courseService;
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/courses")
    @ResponseBody
    public List<CourseDto> getAllCourses(){
        return courseService.getAllCourses().stream().map(Course -> modelMapper.map(Course, CourseDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/courses/{id}")
    @ResponseBody
    public CourseDto getCourseById(@PathVariable(name = "id") Long id){
        return modelMapper.map(courseService.getCourseById(id), CourseDto.class);
    }


    @GetMapping("/categoties")
    @ResponseBody
    public List<CategoryDto> getAllCategory(){
        return categoryService.getAllCategory().stream().map(Category -> modelMapper.map(Category, CategoryDto.class))
                .collect(Collectors.toList());
    }
}
