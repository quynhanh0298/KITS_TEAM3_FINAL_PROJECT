package edu.kits.finalproject.onlinelearningwebapp.Exception;

import edu.kits.finalproject.onlinelearningwebapp.Payload.ResponseObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalCustomException {
    @ExceptionHandler(CustomException.class)
    public ResponseEntity<?> handlerCustomException(Exception e){

        ResponseObject response=new ResponseObject();
        response.setStatus(500);
        response.setData(e.getMessage());

        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
