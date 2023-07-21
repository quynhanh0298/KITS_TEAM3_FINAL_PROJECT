package edu.kits.finalproject.onlinelearningwebapp.Controller;

import edu.kits.finalproject.onlinelearningwebapp.Exception.CustomException;
import edu.kits.finalproject.onlinelearningwebapp.Payload.ResponseObject;
import edu.kits.finalproject.onlinelearningwebapp.Payload.SignUpRequest;
import edu.kits.finalproject.onlinelearningwebapp.Service.UserService;
import edu.kits.finalproject.onlinelearningwebapp.Utils.JWTHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JWTHelper jwtHelper;
    @RequestMapping(value = "/signin",method= RequestMethod.POST)
    public ResponseEntity<?>signin(
            @RequestParam String username,
            @RequestParam String password

    ){

        System.out.println(username + password);
        UsernamePasswordAuthenticationToken token=
                new UsernamePasswordAuthenticationToken(username,password);
        authenticationManager.authenticate(token);
        String jwt= jwtHelper.generateToken(username);
        //chung thuc thanh cong se chay code sau,that bai se loi chugn thuc
        ResponseObject response =new ResponseObject();
        response.setStatus(200);
        response.setData(jwt);

        return new ResponseEntity<>(response, HttpStatus.OK);

    }
//    @RequestMapping(value = "/signup", method = RequestMethod.POST)
//    public ResponseEntity<?> signup(
//            @Valid SignUpRequest request,
//            BindingResult bindingResult
//    ) {
//        List<FieldError> list = bindingResult.getFieldErrors();
//        for (FieldError data :
//                list) {
//            throw new CustomException(data.getDefaultMessage());
////            System.out.println("kiem tra "+data.getField()+ " - "+data.getDefaultMessage());
//        }
//
//        boolean isSuccess = userService.addUser(request);
//
//        ResponseObject response = new ResponseObject();
//        response.setStatus(200);
//        response.setData(isSuccess);
//
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
}
