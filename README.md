# Reelax - Frontend Developer Intern Assignment

A pixel-perfect React implementation of the **Checkout / Review Details** page based on the provided Figma design.

## Tech Stack

- **React JS** (Create React App)
- **CSS Modules** (component-scoped CSS files)
- No external UI libraries — pure React + CSS

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Top navigation bar
│   ├── Navbar.css
│   ├── CheckoutPage.jsx    # Page wrapper with two-column layout
│   ├── CheckoutPage.css
│   ├── BillingForm.jsx     # Left panel - billing details form
│   ├── BillingForm.css
│   ├── OrderSummary.jsx    # Right panel - order summary with coupon and wallet
│   └── OrderSummary.css
├── App.js
├── App.css
└── index.js
```

## Features

- Pixel-perfect match to Figma design
- Component-based architecture
- Functional wallet apply/remove toggle
- Functional coupon selection (WELCOME20 / ANNUAL50) with live price recalculation
- Collapsible coupon section
- Dynamic tax and total calculation
- Form state management with React hooks
- Indian states and cities dropdown
- Country field locked to India

## Getting Started

```bash
npm install
npm start
```

Open http://localhost:3000 in your browser.
