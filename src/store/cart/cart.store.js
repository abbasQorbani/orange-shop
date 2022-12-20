import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./cart.reducer";
const reducer = combineReducers({ cartState: CartReducer });
const middleware = [thunk];
const initState = {};
const CartStore = legacy_createStore(
  reducer,
  initState,
  applyMiddleware(...middleware)
);
export default CartStore;
