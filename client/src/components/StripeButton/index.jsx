import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const price4Stripe = price * 100;

  const onToken = (token) => {
    // console.log('StripeButton -> token', token);
    // alert('Payment Was Successful');
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: price4Stripe,
        token,
      },
    })
      .then((res) => {
        alert('Payment successful!');
      })
      .catch((error) => {
        console.log('Payment error: ', error);
        alert('Payment Error!');
      });
  };

  return (
    <StripeCheckout
      name='Clothing CO.'
      label='Pay Now'
      billingAddress
      shippingAddress
      description={`Your total is £${price}`}
      amount={price4Stripe}
      currency='EUR'
      panelLabel='Pay with Card'
      token={onToken}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    />
  );
};

export default StripeButton;
