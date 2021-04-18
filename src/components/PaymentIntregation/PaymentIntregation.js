import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51IgzvtDABMMq2AIVTRFkLDYM2isTcMU2tYZCN7MFMJkvywJ70uLZ4Y0VjH2aLsWXVxhNLnzJE8qwmQlJpAXZ2fO600O2BLE5vN');

const PaymentIntregation = () => {
    return (
        <div>
            <React.StrictMode>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </React.StrictMode>
        </div>
    );
};

export default PaymentIntregation;