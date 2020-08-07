import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const price4Stripe = price * 100;

  const onToken = (token) => {
    console.log('StripeButton -> token', token);
    alert('Payment Was Successful');
  };

  return (
    <StripeCheckout
      name='Clothing CO.'
      label='Pay Now'
      billingAddress
      shippingAddress
      description={`Your total is £${price}`}
      amount={price4Stripe}
      panelLabel='Pay with Card'
      token={onToken}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    />
  );
};

export default StripeButton;
