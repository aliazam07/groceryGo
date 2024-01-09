// ProductsList.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../productCard/ProductCard';



const ProductList = ({products}) => {
  const { category } = useParams();
  console.log('Received Products:', products);
    // Filter products based on the category name
    const filteredProducts = products.filter(
      (product) => product.cname === category
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
