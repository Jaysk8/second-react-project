import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JeqycAm6aFIJ90kS7yZqo84odoNYNOivkbGIO6nay91ACIjJL1n2kB69BglzijLUIuP8Td4KK3Rt2F3uqS4g9uY00tNyieIJ7';
    const onToken = token => {
        console.log(token);
        alert('Donation Succesful!');
    };

    return (
        <StripeCheckout
            label='Donate'
            name='MovieApp'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Donate'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton