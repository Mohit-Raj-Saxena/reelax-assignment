import React, { useState } from 'react';
import './OrderSummary.css';

const COUPONS = [
  { code: 'WELCOME20', label: '20% off on your first month' },
  { code: 'ANNUAL50', label: '50% off on annual plans' },
];

const OrderSummary = () => {
  const [walletApplied, setWalletApplied] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState('WELCOME20');
  const [couponInput, setCouponInput] = useState('');
  const [showCouponSection, setShowCouponSection] = useState(true);

  const walletBalance = 500;
  const baseSubtotal = 14999;
  const baseTax = 1079.64;

  const walletDiscount = walletApplied ? walletBalance : 0;
  const subtotalDisplay = baseSubtotal;
  const taxDisplay = walletApplied
    ? Math.round((baseSubtotal - walletDiscount) * 0.18 * 100) / 100
    : baseTax;
  const total = Math.round((subtotalDisplay - walletDiscount + taxDisplay) * 100) / 100;

  const fmt = (n) => '₹' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const handleApplyCoupon = () => {
    const match = COUPONS.find(c => c.code === couponInput.toUpperCase());
    if (match) setSelectedCoupon(match.code);
  };

  return (
    <div className="order-summary">
      <div className="summary-box">
        <h2 className="summary-title">Order Summary</h2>

        <div className="plan-card">
          <div className="plan-price-block">
            <span className="plan-price">₹4,999</span>
            <span className="plan-per-month">/month</span>
          </div>
          <div className="plan-info-right">
            <span className="selected-plan-label">SELECTED PLAN</span>
            <span className="plan-name">Startup</span>
          </div>
          <p className="plan-credits">Includes 5,000 credits/mo.</p>
        </div>

        <button className="btn-upgrade-plan">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}>
            <circle cx="12" cy="12" r="10"/>
            <polyline points="16 12 12 8 8 12"/>
            <line x1="12" y1="16" x2="12" y2="8"/>
          </svg>
          Upgrade to Growth Plan
        </button>
      </div>

      <div className="summary-box">
        <div className="wallet-row">
          <div className="wallet-left">
            <span className="wallet-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 3H8L2 7h20l-6-4z" />
              </svg>
            </span>
            <div className="wallet-text">
              <span className="wallet-title">Wallet Balance</span>
              <span className="wallet-available">₹{walletBalance}.00 available</span>
            </div>
          </div>
          <button className={`btn-apply ${walletApplied ? 'applied' : ''}`} onClick={() => setWalletApplied(p => !p)}>
            {walletApplied ? 'Remove' : 'Apply'}
          </button>
        </div>

        <div className="coupon-section">
          <div className="coupon-header" onClick={() => setShowCouponSection(prev => !prev)}>
            <div className="coupon-header-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
                <line x1="7" y1="7" x2="7.01" y2="7"/>
              </svg>
              <span className="coupon-label">Apply Coupon</span>
            </div>
            <svg
              className={`coupon-chevron ${showCouponSection ? 'open' : ''}`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b7280"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          {showCouponSection && (
            <div className="coupon-body">
              <div className="coupon-input-row">
                <input type="text" className="coupon-input" placeholder="Enter coupon code"
                  value={couponInput} onChange={e => setCouponInput(e.target.value)} />
                <button className="btn-coupon-apply" onClick={handleApplyCoupon}>Apply</button>
              </div>
              {COUPONS.map(coupon => (
                <div key={coupon.code}
                  className={`coupon-option ${selectedCoupon === coupon.code ? 'selected' : ''}`}
                  onClick={() => setSelectedCoupon(prev => prev === coupon.code ? '' : coupon.code)}>
                  <div className="coupon-option-text">
                    <span className="coupon-code">{coupon.code}</span>
                    <span className="coupon-desc">{coupon.label}</span>
                  </div>
                  <div className={`radio-btn ${selectedCoupon === coupon.code ? 'radio-selected' : ''}`}>
                    {selectedCoupon === coupon.code && <div className="radio-inner" />}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="price-breakdown">
          <div className="price-row"><span>Subtotal</span><span>{fmt(subtotalDisplay)}</span></div>
          {walletApplied && (
            <div className="price-row discount-row"><span>Wallet Discount</span><span>-{fmt(walletDiscount)}</span></div>
          )}
          <div className="price-row"><span>Tax (18% GST)</span><span>{fmt(taxDisplay)}</span></div>
        </div>

        <div className="total-row">
          <span className="total-label">Total due today</span>
          <span className="total-amount">{total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
        </div>

        <button className="btn-proceed">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default OrderSummary;