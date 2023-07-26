import { PayPalButtons} from '@paypal/react-paypal-js'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {  clearCart,getTotals } from 'features/cartSlice'
import { selectCurrentUser } from "features/auth/authSlice";




const PaypalCheckoutButton = (props) => {
    const user = useSelector(selectCurrentUser)
    const liveCart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getTotals());
    }, [liveCart, dispatch]);

    let courseAddToDb = ""

    liveCart.cartItem?.map(item => {
        courseAddToDb += item.courseId
        courseAddToDb += ","

    })

    const { cart } = props;

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    
      
      

    const handleApprove = (orderID, time, amount, status,mail) =>{
        console.log("Mail to db : " + mail);
        const orderSendToDb = {
             orderId : orderID,
             orderDate: time,
             amount:  amount,
             status: status,
             courses: courseAddToDb,
             user: mail

          };
          console.log(orderSendToDb)

        

        axios({
            method: 'POST',
            url: 'http://localhost:8080/admin/add-order',
            headers: {
                'Content-Type': 'application/json',
                    },
            data: orderSendToDb,
        })
            .then(result => {
                console.log(orderSendToDb)
            })
            .catch(error => console.log(error))
          
        
        //if response is success
        setPaidFor(true);
        //refresh user's account or subscription status

        //if response is error
        //alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us for assistance")
            
        const url = `/mainboard/${orderID}`;

        // Navigate to the new page
        navigate(url);
    }

    

    if(paidFor){
        alert("Your payment was processed successfully")
    }



    if(error){
        alert("Error")
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return <PayPalButtons 
            style={{
                color: "silver",
                layout: "horizontal",
                height: 48,
                tagline: false,
                shape: "pill"
            }}

            onClick={(data,actions) => {
                //Validate on button click, client or server side
                const hasAlreadyBoughtCourse = false;
                if(hasAlreadyBoughtCourse) {
                    setError("You already bought")

                    return actions.reject()
                } else {
                    return actions.resolve()
                }
            }}

            createOrder={(data,actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: "admin",
                            amount: {
                                value: liveCart.cartTotalAmount
                            }
                        }
                    ]
                })
            }}

            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log("order" , order);
                handleApprove(order.id, order.create_time, cart.price, order.status,user)
                handleClearCart()
            }}

            onCancel={() => {

            }}

            onError={(err) => {
                setError(err);
                console.error("Paypal checkout onError", err);
            }}
        />
};

export default PaypalCheckoutButton;