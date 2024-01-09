// PriceComparisonBox.js
import React from 'react';

const PriceComparisonBox = ({ prices }) => {
  return (
    <div className="price-comparison-box bg-gray-200">
      <div className="platform-prices">
        {prices.map((platformPrice) => (
          <div key={platformPrice.platform} className="platform-price-item mb-2 flex justify-evenly">
            <div className="platform-logo">
              {/* Replace the platformLogoSrc with the actual path or URL of the platform logo */}
              <img src={platformPrice.logo} alt={platformPrice.platform} />
            </div>
              
              <div className="platform-price ml-4">₹{platformPrice.price}</div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceComparisonBox;
