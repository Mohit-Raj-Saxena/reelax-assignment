import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-search">
        <input type="text" placeholder="Find influencers to collaborate with" className="search-input" />
        <span className="search-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
      </div>

      <div className="navbar-actions">

        <button className="btn-upgrade">
          <svg width="17" height="17" viewBox="0 0 26 26" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', flexShrink: 0 }}>
            <line x1="13" y1="1.5" x2="13" y2="4.5" />
            <line x1="5.5" y1="4.5" x2="7.8" y2="6.8" />
            <line x1="20" y1="5" x2="21" y2="3.5" />
            <path d="M7 7h12l3.5 5.5L13 23 3.5 12.5z" fill="rgba(255,255,255,0.18)" />
            <path d="M3.5 12.5h19" />
            <path d="M7 7l3.5 5.5m5 0L19 7" />
          </svg>
          Upgrade
        </button>

        <button className="btn-create">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" style={{ marginRight: '7px', flexShrink: 0 }}>
            <line x1="12" y1="4" x2="12" y2="20" />
            <line x1="4" y1="12" x2="20" y2="12" />
          </svg>
          Create Campaign
        </button>

        <div className="avatar-menu-pill">
          <div className="avatar">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#dbeafe" />
              <circle cx="16" cy="13" r="5" fill="#2563eb" />
              <path d="M6 26c0-5.523 4.477-10 10-10s10 4.477 10 10" fill="#2563eb" />
            </svg>
          </div>
          <button className="btn-menu">
            <svg width="18" height="14" viewBox="0 0 22 16" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round">
              <line x1="1" y1="2" x2="21" y2="2" />
              <line x1="1" y1="8" x2="21" y2="8" />
              <line x1="1" y1="14" x2="21" y2="14" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;