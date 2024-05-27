import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import AxiosPublic from "../../../AxiosPublic/AxiosPublic";
import useCart from "../../../CustomHook/useCart";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    // const axiosPublic=useAxiosPublic()
    const [clientSecrete,setCliensecrete]=useState('')
    const [errorMessage, setErrorMessage] = useState(null);
    const [transactionId,setTransactionId]=useState(null)
    const axiosSecure=AxiosPublic()
    const {user}=useContext(AuthContext)
    console.log(user);
 const [cart,refetch]=useCart()
 const totalPrice=cart.reduce((acc,item)=>acc+item.price,0)
    useEffect(()=>{
            axiosSecure.post('/create-payment-intent',{price:totalPrice})
            .then(res=>{
                setCliensecrete(res.data.clientSecret)
                console.log(res.data.clientSecret);
            })
    },[axiosSecure,totalPrice])

    const handleToPayment = async (event) => {
        event.preventDefault();
        if (!elements || !stripe) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        if (cardElement === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setErrorMessage(error.message);
            console.error('Payment error:', error);
        } else {
            setErrorMessage(null);
            console.log('Payment method:', paymentMethod);
        }
        //confirm payment
        const{paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecrete,{
            payment_method:{
                card:cardElement,
                billing_details:{
                    email:user.email,
                    name:user.displayName
                }
            }
        })
        if(confirmError){
            console.log(confirmError);
        }
        else{
            console.log(paymentIntent);
            if(paymentIntent.status=='succeeded'){
                console.log('payment successFull' ,paymentIntent.id);
                setTransactionId(paymentIntent.id)
                const  payment={
                    email:user.email,
                    price:totalPrice,
                    date:new Date(),//use moment.js for utc time
                    cartId:cart.map(item=>item._id),
                    trx:paymentIntent.id,
                    status:'pending'
                }
                console.log("payment details",payment);
             const data=await axios.post(`${import.meta.env.VITE_BASE_URL}/payment`,payment)
             .then(res=>{
                refetch()
                Swal.fire({
                    title: "Payment",
                    text: "Your payment has been successful",
                    icon: "success"
                  });
             console.log(res.data);
             })
            }
        }
    };

    return (
        <form onSubmit={handleToPayment}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#000',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#fa755a',
                        },
                    },
                }}
            />
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <button className="btn btn-primary" type="submit" disabled={!stripe || !elements||!clientSecrete}>
                Pay
            </button>
            {transactionId&&<p className="text-green-600">{transactionId}</p>}
        </form>
    );
};

export default CheckOutForm;