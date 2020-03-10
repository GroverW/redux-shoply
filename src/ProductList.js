import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { Link } from 'react-router-dom';

function ProductList() {
  const products = useSelector(store => store.products)

  return (
    <div className="ProductList">
      {products.map(product => (
        <Link to={`/products/${product.id}`} className="productLink">
          <Product key={product.id} product={product} mode="productList"/>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;

