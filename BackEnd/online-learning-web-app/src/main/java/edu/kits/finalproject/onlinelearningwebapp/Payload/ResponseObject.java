package edu.kits.finalproject.onlinelearningwebapp.Payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseObject {
    private int status;
    private String message;
    private Object data;

}
