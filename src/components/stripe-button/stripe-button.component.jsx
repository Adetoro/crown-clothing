import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I7440IUTrP8jxdUwfPbmrl3vDJiKtVjS7LsShEQN8I8U5851iF5Cde0nxTFaOU58bmVQUBeX8d8c8yEujCQ193C006bDhf7M1';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is ₦${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    );
};

export default StripeCheckoutButton;