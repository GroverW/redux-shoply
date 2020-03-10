import products from './data.json';
import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from './actionTypes';


let productList = Object.entries(products.products)
  .map(product => ({ id: product[0], ...product[1] }))
const discountCodes = [
  {code: 'REMOVE10', discount: .9},
  {code: 'REMOVE20', discount:.8}, 
  {code: 'REMOVE30', discount:.7}
]
const INITIAL_STATE = {
  cart: {},
  products: productList,
  discount: {current: null, codes:discountCodes}
}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: {...state.cart, [action.payload.id]: (state.cart[action.payload.id] + 1 || 1)}}

    case REMOVE_FROM_CART:
      const cartItem = state.cart[action.payload.id];
      if (cartItem) {
        if(cartItem > 1) {
          return { ...state, cart: {...state.cart, [action.payload.id]: cartItem - 1}}
        } else {
          const newCart = {...state.cart};
          delete newCart[action.payload.id];
        
          return {...state, cart: newCart};
        }
      }
      break;
    
    case APPLY_DISCOUNT:
      return {...state, discount: {...state.discount, current: action.payload.code}}

    default:
      return state;
  }
}

export default rootReducer;