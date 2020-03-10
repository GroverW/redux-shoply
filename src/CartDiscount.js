import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { applyDiscount } from './actions';


function CartDiscount(code) {
  const dispatch = useDispatch();
  const discount = useSelector(store => store.discount);
  const [errors, setErrors] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const code = evt.target.coupon.value.toUpperCase();
    if (discount.current === null && discount.codes.find(c => c.code === code)) {
      dispatch(applyDiscount(code));
      evt.target.coupon.value = '';
    }
    else if (discount.current) {
      setErrors(<div className="alert-danger">You can't do that. One discount code per customer.</div>)
    }
    else {
      setErrors(<div className="alert-danger">Something went wrong.</div>)
    }
  }
  return (
    <div className="CartDiscount">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="coupon">Got a Coupon Code?</label><br />
          <input className="form-control" name="coupon" id="coupon" placeholder="Enter code" /><br />
          <button>Submit</button>
          {errors}
        </div>
      </form>
    </div>
  )
}

export default CartDiscount;