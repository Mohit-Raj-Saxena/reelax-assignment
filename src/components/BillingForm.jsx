import React from 'react';
import './BillingForm.css';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu & Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh'
];

const CITIES = {
  'Delhi': ['New Delhi', 'Dwarka', 'Rohini', 'Saket'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
  'Karnataka': ['Bengaluru', 'Mysuru', 'Hubli', 'Mangaluru'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
  'Uttar Pradesh': ['Lucknow', 'Noida', 'Agra', 'Varanasi', 'Kanpur'],
};

const BillingForm = ({ formData, setFormData, onCancel, onSave }) => {
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const cities = CITIES[formData.state] || [];

  return (
    <div className="billing-form">
      <h1 className="form-title">Review your details</h1>
      <h2 className="form-section-title">Billing Information</h2>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="abhigyan"
            value={formData.companyName}
            onChange={e => handleChange('companyName', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            placeholder="abhigyan.pandey@getreelax.com"
            value={formData.email}
            onChange={e => handleChange('email', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">GST Number <span className="optional">(Optional)</span></label>
          <input
            type="text"
            className="form-input"
            placeholder="GST Number"
            value={formData.gst}
            onChange={e => handleChange('gst', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">PAN Number <span className="optional">(Optional)</span></label>
          <input
            type="text"
            className="form-input"
            placeholder="PAN Number"
            value={formData.pan}
            onChange={e => handleChange('pan', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Premise/House no.</label>
          <input
            type="text"
            className="form-input"
            placeholder="Premise/House no."
            value={formData.premise}
            onChange={e => handleChange('premise', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Street</label>
          <input
            type="text"
            className="form-input"
            placeholder="Street"
            value={formData.street}
            onChange={e => handleChange('street', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">State</label>
          <div className="select-wrapper">
            <select
              className="form-select"
              value={formData.state}
              onChange={e => handleChange('state', e.target.value)}
            >
              <option value="">Select state</option>
              {INDIAN_STATES.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">City</label>
          <div className="select-wrapper">
            <select
              className="form-select"
              value={formData.city}
              onChange={e => handleChange('city', e.target.value)}
            >
              <option value="">Select city</option>
              {cities.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Country</label>
          <input
            type="text"
            className="form-input"
            placeholder="India"
            value={formData.country}
            onChange={e => handleChange('country', e.target.value)}
            readOnly
          />
        </div>

        <div className="form-group">
          <label className="form-label">Pin Code</label>
          <input
            type="text"
            className="form-input"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={e => handleChange('pincode', e.target.value)}
          />
        </div>
      </div>

      <div className="form-actions">
        <button className="btn-cancel" onClick={onCancel}>Cancel</button>
        <button className="btn-save" onClick={onSave}>Save Details</button>
      </div>
    </div>
  );
};

export default BillingForm;
