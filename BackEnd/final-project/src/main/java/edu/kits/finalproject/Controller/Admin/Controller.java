package edu.kits.finalproject.Controller.Admin;

import edu.kits.finalproject.Model.CategoryDto;
import edu.kits.finalproject.Model.CourseDto;
import edu.kits.finalproject.Model.ResponseDto;
import edu.kits.finalproject.Service.CategoryService;
import edu.kits.finalproject.Service.CourseService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @PostMapping("/add-course")
    public ResponseEntity<ResponseDto> addCourse(@RequestParam("file") MultipartFile file, @RequestParam("name") String name){
        String message = "";
        try{
            courseService.store(name, 10, "new course", file, 0, 0);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto(message));
        }catch (Exception e){
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseDto(message));
        }

    }
}
