import rootReducer from './rootReducer';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import { addToCart, removeFromCart } from './actions';

const INITIAL_STATE = {
  cart: {},
  products: [{
    "id": "47314fa1-ae56-4eae-80be-af6691145951",
    "name": "tv",
    "price": 219.99,
    "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
    "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
  }]
}
describe("rootReducer", function () {

  it("returns the initial state", function () {
    expect(rootReducer(INITIAL_STATE, { type: '' })).toEqual(INITIAL_STATE);
  });

  it("adds to cart", function () {
    expect(rootReducer(INITIAL_STATE, { type: ADD_TO_CART, payload: { id: "47314fa1-ae56-4eae-80be-af6691145951" } })).toEqual({ ...INITIAL_STATE, cart: { "47314fa1-ae56-4eae-80be-af6691145951": 1 } })
  });

  it("removes from cart", function () {
    const populatedCart = rootReducer(INITIAL_STATE, { type: ADD_TO_CART, payload: { id: "47314fa1-ae56-4eae-80be-af6691145951" } });
    expect(rootReducer(populatedCart, { type: REMOVE_FROM_CART, payload: { id: "47314fa1-ae56-4eae-80be-af6691145951" } })).toEqual(INITIAL_STATE)
  });
});

describe("actions", function () {

  it("returns the correct action", function () {
    expect(addToCart("47314fa1-ae56-4eae-80be-af6691145951")).toEqual({ type: ADD_TO_CART, payload: { id: "47314fa1-ae56-4eae-80be-af6691145951" } });
    expect(removeFromCart("47314fa1-ae56-4eae-80be-af6691145951")).toEqual({ type: REMOVE_FROM_CART, payload: { id: "47314fa1-ae56-4eae-80be-af6691145951" } });
  });
  
  
});
