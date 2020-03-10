import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import './Product.css';


function Product({ product }) {
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addToCart(product.id));
  }

  const removeItem = () => {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div className="Product">
      <img className="Product-image"
        src={product.image_url}
        alt={product.name} />
        <p className="Product-title Product-text">{product.name}</p>
        <p className="Product-text">{product.price}</p>
        <p className="Product-text">{product.description}</p>
        <br className="clear" />
      <button onClick={addItem} className="btn btn-primary">
        Add to Cart
      </button>
      {cart[product.id]
        ? (<button onClick={removeItem} className="btn btn-danger">
          Remove from Cart <span className="numberCircle">{cart[product.id]}</span>
        </button>)
        : ""}
    </div>
  );
}

export default Product;

