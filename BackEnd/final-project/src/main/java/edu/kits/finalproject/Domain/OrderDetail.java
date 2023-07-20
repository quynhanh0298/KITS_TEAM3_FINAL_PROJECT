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
@Table(name = "orderdetails")
public class OrderDetail implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderDetailId;
    //    @Column(nullable = false)
//    private int oderId;
    @Column(nullable = false)
    private int quantity;
    @Column(nullable = false)
    private double unitPrice;

    @ManyToOne
    @JoinColumn(name = "productId")
    private Product product;

//    @ManyToOne
//    @JoinColumn(name = "orderId")
//    private Order order;
}