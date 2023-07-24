package edu.kits.finalproject.Controller.Admin;

import edu.kits.finalproject.Domain.Course;
import edu.kits.finalproject.Domain.OnlineClass;
import edu.kits.finalproject.Domain.Order;
import edu.kits.finalproject.Domain.User;
import edu.kits.finalproject.Model.*;
import edu.kits.finalproject.Repository.UserRepository;
import edu.kits.finalproject.Service.*;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderService orderService;

    @Autowired
    private OnlineClassService onlineClassService;

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

//    @PostMapping(path = "/add-order",
//        consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE},
//        produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})

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

    @GetMapping("/online-class")
    @ResponseBody
    public List<OnlineClass> getAllOnlineClass(){
        return onlineClassService.getAllOnlineClass().stream().collect(Collectors.toList());
    }

    @GetMapping("/courses-tutor")
    @ResponseBody
    public List<CourseDto> getAllTutorOwnCourses(){
        List<CourseDto> courseDtos = courseService.getAllCourses().stream().map(Course -> modelMapper.map(Course, CourseDto.class))
                .collect(Collectors.toList());

        for(CourseDto courseDto : courseDtos){
            System.out.println(courseDto.getUserDtos());
        }

        List<Integer> courseDtos2 = courseService.getAllCourses().stream().map(course -> course.getUsers().size())
            .collect(Collectors.toList());
        for(Integer integer : courseDtos2){
            System.out.println(integer);
        }

        return courseDtos;
    }
}
