import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const ProcessPayment = ({handlePaymentSuccess}) => {
    const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
    return (
        <Elements stripe={stripePromise}>
               <SimpleCardForm handlePaymentSuccess={handlePaymentSuccess}></SimpleCardForm>
    </Elements>
    );
};

export default ProcessPayment;