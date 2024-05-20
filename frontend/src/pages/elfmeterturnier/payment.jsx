import * as React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useCallback } from 'react';
import { MY_URL } from '../../lib/config';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NBK82CI8cvk3GBMTYHRIim7ROTrW6PKJDZ5A1a8cK5tAQjMDdaIScbM94pgFX8c4KicsRSDvlllsmsMJfTqzfpF00ONKeYHc0');

const Payment = () => {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch(`${MY_URL}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = {fetchClientSecret};

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

export default Payment