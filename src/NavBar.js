import React from 'react';
import { useSelector } from 'react-redux';

function NavBar() {
  const cart = useSelector(store => store.cart);
  const products = useSelector(store => store.products);

  let numItems = 0;
  let totalPrice = 0;
  for(const itemId in cart) {
    numItems += cart[itemId];
    totalPrice += products.find(product => product.id === itemId).price * cart[itemId];
  }

  return (
    <div className="navbar fixed-top text-light bg-dark">
      
      Cart: ${totalPrice} ({numItems} items)
    </div>
  );
}

export default NavBar;

