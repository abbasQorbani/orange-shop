import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { OrderReducer } from "./order.reducer";
const reducer = combineReducers({ orderState: OrderReducer });
const middleware = [thunk];
const initState = {};
const OrderStore = legacy_createStore(
  reducer,
  initState,
  applyMiddleware(...middleware)
);
export default OrderStore;
