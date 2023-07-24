package edu.kits.finalproject.Domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "OnlineClasses")
public class OnlineClass implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long onlineClassId;

    @Column(columnDefinition = "nvarchar(100) not null")
    private String name;

    @Column
    private double price;

    @Column(columnDefinition = "nvarchar(500)")
    private String description;

    @Column(columnDefinition = "nvarchar(500)")
    private String thumbnail;

    @Column
    private int enroll;

//    Id of tutor
    @Column
    private Long UserId;

    @Column(columnDefinition = "nvarchar(500)")
    private String listOfVideo;

    public OnlineClass(String name, double price, String description, String thumbnail, int enroll, Long userId, String listOfVideo) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.thumbnail = thumbnail;
        this.enroll = enroll;
        UserId = userId;
        this.listOfVideo = listOfVideo;
    }
}
