package edu.kits.finalproject.onlinelearningwebapp.Exception;

public class CustomException extends RuntimeException{
    private String message;

    public CustomException(String message) {
        this.message = message;
    }
}
