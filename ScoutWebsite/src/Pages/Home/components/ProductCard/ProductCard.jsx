import React from 'react';
import '../ProductCard/ProductCard.css';

const ProductCards = () => {
  const products = [
    { name: 'Lactose Monohydrate', imageUrl: 'path-to-pill-image', bgColor: '#FFF8E1' },
    { name: 'Lactose Monohydrate', imageUrl: 'path-to-candy-image', bgColor: '#FFF8E1' },
    { name: 'Lactose Monohydrate', imageUrl: 'path-to-cereal-image', bgColor: '#FFF8E1' },
  ];

  return (
    <div className="product-cards-container">
      <header className="product-cards-header">
        <h2>Products</h2>
        <span>(Recently Searched)</span>
        <button className="view-all-btn">View All</button>
      </header>
      <div className="product-cards">
        {products.map((product, index) => (
          <div key={index} className="product-card" style={{ backgroundColor: product.bgColor }}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-name">{product.name}</div>
          </div>
        ))}
      </div>
      <div className="indicator-dots">
        {/* Placeholder for indicator dots; you might want to replace it with a proper component */}
        <span>•</span> <span>•</span> <span>•</span>
      </div>
    </div>
  );
};

export default ProductCards;
