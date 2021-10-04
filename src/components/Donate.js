import StripeButton from './StripeButton';

const Donate = () => {

const totalPrice = 20;

  return (
    <div className="donate">
      <header className="App-header">
        <h1>Make MovieApp Donation</h1>
        <p>
          Donate Total of $ {totalPrice}
        </p>
        <p>
          <StripeButton price={totalPrice} />
        </p>
      </header>
    </div>
  );
}

export default Donate;
