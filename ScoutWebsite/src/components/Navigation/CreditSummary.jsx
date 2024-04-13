import React from 'react';

const CreditsSummary = () => {
  // Define styles inline to avoid using external CSS
  const styles = {
    container: {
      borderRadius: '5px',
      padding: '10px',
      marginBottom: '10px',
      fontFamily: 'Arial, sans-serif',
    },
    productCredits: {
      backgroundColor: '#FFD700', // Yellow background
      color: '#000', // Black text
      padding: '10px',
      borderRadius: '5px',
      margin: '10px 0',
    },
    peopleCredits: {
      backgroundColor: '#007BFF', // Blue background
      color: '#FFF', // White text
      padding: '10px',
      borderRadius: '5px',
      margin: '10px 0',
    },
    warning: {
      color: '#D9534F', // Bootstrap's btn-danger color
      padding: '10px',
      margin: '10px 0',
    },
    offer: {
      padding: '10px',
      margin: '10px 0',
      textAlign: 'center',
      color: '#000',
    },
    originalPrice: {
      textDecoration: 'line-through',
      color: '#6c757d', // Bootstrap's text-muted color
    },
  };

  return (
    <div>
      <div style={styles.container}>
      Product Credits
        <div style={styles.productCredits}>
          
          <div>10 out of 30</div>
        </div>
        People Credits
        <div style={styles.peopleCredits}>
         
          <div>10 out of 30</div>
        </div>
        <div style={styles.warning}>
          <span role="img" aria-label="alert">⚠️</span>
          Your account is low on credits
        </div>
      </div>
      <div style={styles.offer}>
        <div>400 Credits</div>
        <div>
          <span style={styles.originalPrice}>₹799</span> ₹499/mo
        </div>
      </div>
    </div>
  );
};

export default CreditsSummary;
