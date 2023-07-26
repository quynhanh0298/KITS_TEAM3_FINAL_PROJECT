package edu.kits.finalproject.Controller.Admin;

import edu.kits.finalproject.entity.Course;
import edu.kits.finalproject.entity.Order;
import edu.kits.finalproject.entity.User;
import edu.kits.finalproject.Model.*;
import edu.kits.finalproject.Repository.UserRepository;
import edu.kits.finalproject.Service.CategoryService;
import edu.kits.finalproject.Service.CourseService;
import edu.kits.finalproject.Service.OrderService;
import edu.kits.finalproject.Service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderService orderService;

    @GetMapping("/courses")
    @ResponseBody
    public List<CourseDto> getAllCourses(){
        return courseService.getAllCourses().stream().map(Course -> modelMapper.map(Course, CourseDto.class))
                .collect(Collectors.toList());
    }

    //Get Course detail
    @GetMapping("/courses/{id}")
    @ResponseBody
    public CourseDto getCourseById(@PathVariable(name = "id") Long id){
        return modelMapper.map(courseService.getCourseById(id), CourseDto.class);
    }

//    ResponseEntity<ResponseObject> findById(@PathVariable Long id) {
//        Optional<Course> foundCourse = courseService.findById(id);
//        if (foundCourse.isPresent()) {
//            return ResponseEntity.status(HttpStatus.OK).body(
//                    new ResponseObject(200, "Query course successfully", foundCourse)
//            );
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
//                    new ResponseObject(404, "Can not find course with id = " + id, "")
//            );
//        }
//    }

//    //Insert new course with POST method: This is when tutor add new course
//    @PostMapping("/insert")
//    ResponseEntity<ResponseObject> insertCourse(@RequestBody Course course) {
//        return ResponseEntity.status(HttpStatus.OK).body(
//                new ResponseObject(200, "Insert Course successfully", courseService.save(course))
//        );
//    }

//    //Get course by category_id:
//    @GetMapping("/course-by-category-id/{category_id}")
//    ResponseEntity<ResponseObject> getCourseByCategoryId(@PathVariable Long category_id) {
//        Optional<Course> foundCourse = courseService.findByCategoryId(category_id);
//        if (foundCourse.isPresent()) {
//            return ResponseEntity.status(HttpStatus.OK).body(
//                    new ResponseObject(200, "Query course successfully", foundCourse)
//            );
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
//                    new ResponseObject(404, "Can not find course with id = " + category_id, "")
//            );
//        }
//    }


//    //Update course
//    @PutMapping("/{id}")
//    ResponseEntity<ResponseObject> updateCourse(@PathVariable("id") Long id, @RequestBody Course newCourse) {
//        Optional<Course> updatedCourse = courseService.findById(id)
//                .map(course -> {
//                    course.setName(newCourse.getName());
//                    course.setDescription(newCourse.getDescription());
//                    course.setPrice(newCourse.getPrice());
//                    return courseService.save(course);
//                });
//        return updatedCourse.isPresent() ?
//                ResponseEntity.status(HttpStatus.OK).body(
//                        new ResponseObject(200, "Update course successfully", updatedCourse)
//                )
//                :
//                ResponseEntity.status(HttpStatus.NOT_FOUND).body(
//                        new ResponseObject(404, "Can not find course with id = " + id, "")
//                );
//    }




    @PostMapping("/add-course")
    public ResponseEntity<ResponseDto> addCourse( @RequestParam("name") String name){
        String message = "";
        try{
            courseService.store(name, 10, "new course", "No image", 0, 0,"hello");
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto(message));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseDto(message));
        }
    }

    @GetMapping("/get-tutor-from-course/{id}")
    @ResponseBody
    public UserDto getUserOwnTheCourse(@PathVariable(name = "id") Long id) {
        Course course = courseService.getCourseById(id);
        List<User> users = course.getUsers();
        User user = users.get(0);
        return modelMapper.map(user, UserDto.class);
    }



    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/add-order",
            consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<ResponseDto> addOrder(@RequestBody Order order){
        String message = "";
        try{
            orderService.store(order.getOrderId(), order.getOrderDate(), order.getAmount(), order.getStatus(), order.getCourses());
            message = "Uploaded order successfully: ";
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto(message));
        }catch (Exception e){
            message = "Could not upload oder!";
            System.out.println("Exception");
        }
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseDto(message));
    }

    @GetMapping("/order/{orderId}")
    @ResponseBody
    public OrderDto getOrderById(@PathVariable(name = "orderId") String orderId){
        return modelMapper.map(orderService.getOrderById(orderId), OrderDto.class);
    }


//    @GetMapping("/categoties")
//    @ResponseBody
//    public List<CategoryDto> getAllCategory(){
//        return categoryService.getAllCategory().stream().map(Category -> modelMapper.map(Category, CategoryDto.class))
//                .collect(Collectors.toList());
//    }

    @GetMapping("/courses-tutor")
    @ResponseBody
    public List<UserDto> getAllTutorOwnCourses(){

        List<UserDto> userDtos = courseService.getAllCourses().stream().map(course -> course.getUsers().get(0))
                .collect(Collectors.toList()).stream().map(user -> modelMapper.map(user, UserDto.class))
                .collect(Collectors.toList());
        return userDtos;
    }

    @GetMapping("/user/{email}")
    @ResponseBody
    public UserDto getUserByEmail(@PathVariable(name = "email") String email){
        System.out.println(userService.getUserByEmail(email));
        return modelMapper.map(userService.getUserByEmail(email).get(), UserDto.class);

    }


}
