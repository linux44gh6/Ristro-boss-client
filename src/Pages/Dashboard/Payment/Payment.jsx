import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import DashBoardSectionTitle from "../../../Shared/DashBoardSectionTitle";

//TODO:Add publishable key
const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GETWAY_PK}`);
const Payment = () => {
    return (
        <>
        <DashBoardSectionTitle
        Heading={'Payment'}
        ></DashBoardSectionTitle>
         <Elements  stripe={stripePromise}>
            <CheckOutForm
            ></CheckOutForm>
        </Elements>
        </>
       
    );
};

export default Payment;