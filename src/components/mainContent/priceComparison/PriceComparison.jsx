// PriceComparison.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../productCard/product'; 

const PriceComparison = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product with the matching id in the products array
    const foundProduct = products.find((p) => String(p.id) === id);

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.error('Product not found');
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const { productName, productImage, prices } = product;

  return (
    <div className="price-comparison-modal">
      <h2 className="text-2xl font-semibold mb-4 text-center">{productName} Prices</h2>

      <div className="price-container flex justify-evenly">
        <div className="product-image-container">
          <img
            src={productImage}
            alt={productName}
            className="object-cover w-full h-full ml-10"
          />
        </div>

        <div className="platform-prices-container">
        <h1>Multi-Store Prices</h1>
          {prices && prices.map((platformPrice) => (
            <div key={platformPrice.platform} className="platform-price-item flex">
              <div className="platform-name"><img src={platformPrice.logo} alt={productName}/>=</div>
              <div className="platform-price">₹{platformPrice.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceComparison;
