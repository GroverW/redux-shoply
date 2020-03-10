import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const cart = useSelector(store => store.cart);
  const products = useSelector(store => store.products);
  const discount = useSelector(store => store.discount);

  let numItems = 0;
  let totalPrice = 0;
  for(const itemId in cart) {
    numItems += cart[itemId];
    totalPrice += products.find(product => product.id === itemId).price * cart[itemId];
  }
  console.log(discount);
  let currentCode = discount.codes.find(c => c.code === discount.current);
  totalPrice = currentCode ? currentCode.discount * totalPrice : totalPrice;

  return (
    <div className="navbar fixed-top text-light bg-dark">
      <NavLink to="/" className="text-light">Shoply</NavLink>
      <NavLink to="/cart" className="text-light">Cart ${totalPrice} ({numItems} items)</NavLink>
    </div>
  );
}

export default NavBar;

