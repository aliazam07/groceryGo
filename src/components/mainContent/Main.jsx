import React from 'react'
import { useState } from 'react'
import ProductList from './productList/ProductList'
import Sidebar from './sidebar/Sidebar'
import products from './productCard/product'

const Main = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  return (
    <div className=''>
    <div >
      {/* Sidebar takes 20% of the width */}
      <Sidebar setFilteredProducts={setFilteredProducts} />
    </div>
    <div >
      {/* ProductList takes the remaining 80% of the width */}
      <ProductList products={filteredProducts} />
    </div>
  </div>
    
  )
}

export default Main