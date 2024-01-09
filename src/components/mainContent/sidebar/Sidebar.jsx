// Sidebar.js
import React from 'react';
import { useState } from 'react';
import products from '../productCard/product';

const Sidebar = ({setFilteredProducts}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  

  const handlePriceChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    const filteredProducts = filterProducts(selectedCategories, min, max, searchTerm);
    setFilteredProducts(filteredProducts);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    const filteredProducts = filterProducts(selectedCategories, minPrice, maxPrice, value);
    setFilteredProducts(filteredProducts);
  };

  const filterProducts = (categories, min, max, searchTerm) => {
    return products.filter((product) => {
      const categoryMatch = categories.length === 0 || categories.includes(product.category);
      const priceMatch =
        (min === '' || parseFloat(product.price) >= parseFloat(min)) &&
        (max === '' || parseFloat(product.price) <= parseFloat(max));
      const searchMatch = product.productName.toLowerCase().includes(searchTerm.toLowerCase());

      return categoryMatch && priceMatch && searchMatch;
    });
  };
  return (
    <div className="bg-gray-400 p-4 flex">
       {/* Search Bar Section */}
       <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Search</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-auto px-2 py-1 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      


      {/* Price Range Section */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Price Range</h2>
        <div>
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => handlePriceChange(e.target.value, maxPrice)}
            className="w-1/2 px-2 py-1 border rounded focus:outline-none focus:border-blue-500"
          />
          <span className="mx-2">to</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => handlePriceChange(minPrice, e.target.value)}
            className="w-1/2 px-2 py-1 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

     
      
    </div>
  );
};

export default Sidebar;
