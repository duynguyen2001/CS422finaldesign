import React, { useState } from 'react';
import './PaymentPage.css';
import HeaderComponent from './HeaderComponent';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleCardHolderNameChange = (e) => {
    setCardHolderName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
  };

  return (
    <div className='payment-page'>
      <HeaderComponent/>
      <div className="payment-page-container">
        <form onSubmit={handleSubmit}>
          <label>
            Card Number:
            <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
          </label>
          <label>
            Expiry Date:
            <input type="text" value={expiryDate} onChange={handleExpiryDateChange} />
          </label>
          <label>
            CVV:
            <input type="text" value={cvv} onChange={handleCvvChange} />
          </label>
          <label>
            Card Holder Name:
            <input type="text" value={cardHolderName} onChange={handleCardHolderNameChange} />
          </label>
          <button type="submit">Pay Now!</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;