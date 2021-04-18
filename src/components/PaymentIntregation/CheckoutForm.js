import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { OrderContext, UserContext, UserToken } from '../../App';
import axios from 'axios';

const CheckoutForm = () => {
    const [paymentError, setPaymentError] = useState('');
    const [success, setSuccess] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [userToken, setuserToken] = useContext(UserToken);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderItems, setOrderItems] = useContext(OrderContext);
    const handleSubmit = async (event) => {


        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement),

        });
        const confirmedOrder = {
            name: userToken.name || loggedInUser.name,
            email: userToken.email || loggedInUser.email,
            item: orderItems,
            workStatus: 'pending',
            payment: paymentMethod

        }


        if (error) {
            setSuccess('')
            setPaymentError(error.message);
        } else {
            axios.post('https://event-fusion.herokuapp.com/confirmOrder', confirmedOrder)
                .then(response => {
                    if (response) {
                        setPaymentError('')
                        setSuccess("payment success!!")
                    }
                })
        }

    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="payment-form w-50">
                    <CardNumberElement className="p-3 m-2 bg-light" />
                    <CardExpiryElement className="p-3 m-2 bg-light" />
                    <CardCvcElement className="p-3 m-2 bg-light" />
                </div>
                <div className="d-flex justify-content-left p-3">

                    <button type="submit" className='btn-brand py-1 px-4' disabled={!stripe}>
                        <h5>Pay Now</h5>
                    </button>
                    <br />

                </div>
                {paymentError && <p className='text-danger text-left'>{paymentError}</p>}
                {success && <p className='text-success text-left'>{success}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;