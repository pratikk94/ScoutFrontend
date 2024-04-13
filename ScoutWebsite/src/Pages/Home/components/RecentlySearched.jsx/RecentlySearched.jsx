import React from 'react';
import './RecentlySearched.css';

const RecentlySearched = () => {
  const people = [
    { initials: 'AS', name: 'Anant Shukla' },
    { initials: 'AS', name: 'Anant Shukla' },
    { initials: 'AS', name: 'Anant Shukla' },
    { initials: 'AS', name: 'Anant Shukla' }
  ];

  return (
    <div className="recently-searched-container">
      <header className="recently-searched-header">
        <h2>People</h2>
        <span>(Recently Searched)</span>
        <button className="view-all-btn">View All</button>
      </header>
      <ul className="recently-searched-list">
        {people.map((person, index) => (
          <li key={index} className="person-item">
            <span className="initials">{person.initials}</span>
            <span className="name">{person.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentlySearched;
