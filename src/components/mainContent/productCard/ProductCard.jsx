// ProductCard.js
import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';

import PriceComparisonBox from './PriceComparisonBox';

const ProductCard = ({ product }) => {
  const { productName, productImage, price, discount, id, prices } = product;
  const [showComparison, setShowComparison] = useState(false);

  const handleComparePrices = () => {
    setShowComparison(true);
  };
  const handleMouseLeave = () => {
    setShowComparison(false);
  };


  return (
    <Link to={`/compare/${encodeURIComponent(id)}`}>
    <div className="bg-white p-4 shadow-md rounded-md mb-4" style={{ maxWidth: '300px' }}>
   
    <div className='imgSize' style={{ width: '200px', height: '300px' }}>
      <img
        src={productImage}
        alt={productName}
        className="  object-cover mb-2"
      />
      </div>
      <h3 className="text-lg font-semibold mb-2 overflow-hidden line-clamp-2">
          {productName}
        </h3>

      <div className="flex items-center mb-2">
        <span className="text-gray-600 line-through mr-2">₹{price}</span>
        <span className="text-red-500 font-bold">
        ₹{(price - (price * discount) / 100).toFixed(2)}
        </span>
      </div>

      <div className="mb-2">
        <span className="text-green-500 font-semibold">{discount}% off</span>
      </div>

      <button
          onMouseEnter={handleComparePrices}
          onMouseLeave={handleMouseLeave}
          className="bg-blue-500 text-white px-4 py-2 rounded relative transition-colors duration-300 hover:bg-gray-200 hover:text-black hover:text-xl"
        >
          Compare Prices
          {showComparison && <PriceComparisonBox prices={prices} />}
        </button>
      
    </div></Link>
  );
};

export default ProductCard;
