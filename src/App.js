import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <CheckoutPage />
    </div>
  );
}

export default App;
