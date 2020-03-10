import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { Link } from 'react-router-dom';
import CartDiscount from './CartDiscount';

function Cart() {
  const cart = useSelector(store => store.cart);
  const products = useSelector(store => store.products);
  let cartProducts = products.filter(product => (product.id in cart));

  return (
    <div className="Cart">
      {cartProducts.length !== 0 ? 
        cartProducts.map(product => (
          <Link to={`/products/${product.id}`} className="productLink">
            <Product key={product.id} product={product} mode="productList"/>
          </Link>
        ))
        :
        <p>Your Cart is Empty</p>
      }
      <CartDiscount/>
    </div>
  );
}

export default Cart;




