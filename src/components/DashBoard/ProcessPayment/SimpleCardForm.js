import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({handlePaymentSuccess}) => {
  const stripe = useStripe();
  const elements = useElements();
let [Error,setError]=useState(false)
let [success,setSuccess]=useState('')
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message)
      setSuccess('')
    } else {
     setSuccess("successfully paid")
     handlePaymentSuccess(paymentMethod.id)
   console.log(paymentMethod.id)
     setError('')
    }
  };

  return (
<div>
<form onSubmit={handleSubmit}>
      <CardElement />
      <button className="btn btn-success mt-3"type="submit" disabled={!stripe}>
      Pay for Order
      </button>
    </form>
    {Error && <p style={{color:'red'}}>{Error}</p> }
    {success && <p style={{color:"green"}}>{success}</p>}
</div>
  );
};
export default SimpleCardForm;