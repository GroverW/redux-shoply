import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import './Product.css';
import Product from './Product';

function ProductDetail() {
  const {id} = useParams();
  const products = useSelector(store => store.products);
  console.log(products);
  const product = products.find(product => product.id === id);

  return (
    <Product product={product} />
  )
}

export default ProductDetail;