import { PayPalButtons} from '@paypal/react-paypal-js'
import { useState } from 'react';
import { useSelector } from 'react-redux'


const PaypalCheckoutButton = (props) => {
    const liveCart = useSelector((state) => state.cart);

    const { cart } = props;

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderID) =>{
        //Call backend function to fullfill order
        
        //if response is success
        setPaidFor(true);
        //refresh user's account or subscription status

        //if response is error
        //alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us for assistance")
    }

    if(paidFor){
        alert("Your payment was processed successfully")
    }



    if(error){
        alert("Error")
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
                            description: cart.description,
                            amount: {
                                value: cart.price
                            }
                        }
                    ]
                })
            }}

            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log("order" , order);
                handleApprove(data.orderID)
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