import React, { useState } from 'react';
import './CheckoutPage.css';
import BillingForm from './BillingForm';
import OrderSummary from './OrderSummary';
import { IoArrowBack } from 'react-icons/io5';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    gst: '',
    pan: '',
    premise: '',
    street: '',
    state: '',
    city: '',
    country: 'India',
    pincode: '',
  });

  const handleCancel = () => {
    setFormData({
      companyName: '',
      email: '',
      gst: '',
      pan: '',
      premise: '',
      street: '',
      state: '',
      city: '',
      country: 'India',
      pincode: '',
    });
  };

  const handleSave = () => {
    alert('Details saved successfully!');
  };

  return (
    <div className="checkout-page">
      <div className="back-link">
        <IoArrowBack className="back-arrow" />
        <span>Back to plans</span>
      </div>
      <div className="checkout-content">
        <BillingForm
          formData={formData}
          setFormData={setFormData}
          onCancel={handleCancel}
          onSave={handleSave}
        />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;
