import React from 'react';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import { useVideoContext } from "../../Context/VideoContext";

const stripePromise = loadStripe('pk_test_51QlllmLUG7uEQcF20VQmoPmdaVs5TEKvuJaCKdB9eVf9A7rLaT1yvDe8zKT3LZYJOtCCGnEsGHVFZN0Tx2hG3xqS00AMaL8vmG');
export default function Checkoutpayment() {

    const {clientSecret} = useVideoContext();
    


console.log("clientSecret.............",clientSecret);


   const option = { clientSecret }


  return (
    <div className='bg-gray-50'>
      <div className="m-auto max-w-3xl p-5 text-orange-900 pt-20 bg-gray-50">
        <h1 className="text-2xl py-3 text-center">Payment</h1>
        <EmbeddedCheckoutProvider stripe={stripePromise} options={option}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>

  )
}