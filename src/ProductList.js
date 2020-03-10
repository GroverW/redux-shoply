import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

function ProductList() {
  const products = useSelector(store => store.products)

  return (
    <div className="ProductList">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

