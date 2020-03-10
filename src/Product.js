import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import './Product.css';


function Product({ product, mode="" }) {
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const addItem = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    dispatch(addToCart(product.id));
  }

  const removeItem = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    dispatch(removeFromCart(product.id));
  }

  return (
    <div className={`Product ${mode}`}>
      <img className="Product-image"
        src={product.image_url}
        alt={product.name} />
        <p className="Product-title Product-text">{product.name}</p>
        <p className="Product-text">{product.price}</p>
        <p className="Product-text">{product.description}</p>
      <button onClick={addItem} className="btn btn-primary">
        Add to Cart
      </button>
      {cart[product.id]
        && (<button onClick={removeItem} className="remove-link">
          Remove from Cart <span className="numberCircle">{cart[product.id]}</span>
        </button>)}
        <br className="clear" />
    </div>
  );
}

export default Product;

