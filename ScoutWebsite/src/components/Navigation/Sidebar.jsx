import React from 'react';
import './Sidebar.css';
import CreditsSummary from './CreditSummary';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://via.placeholder.com/150x50?text=SCOUT" alt="Scout Logo" />
      </div>
      <nav className="nav">
        <a href="#dashboard" className="nav-item">
          <span className="icon">🏠</span>
          Dashboard
        </a>
        <a href="#search" className="nav-item">
          <span className="icon">🔍</span>
          Search
        </a>
        <a href="#my-lists" className="nav-item">
          <span className="icon">📝</span>
          My Lists
        </a>
      </nav>
      <CreditsSummary/>
      <nav className="nav">
        <a href="#pricing" className="nav-item sale">
          <span className="icon">💵</span>
          Pricing <span className="badge">Sale 25% OFF</span>
        </a>
        <a href="#my-account" className="nav-item">
          <span className="icon">👤</span>
          My Account
        </a>
        <a href="#support" className="nav-item">
          <span className="icon">🆘</span>
          Support
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
