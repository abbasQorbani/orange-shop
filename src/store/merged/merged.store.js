import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AdDetailReducer } from "../ad/ad-detail/adDetail.reducer";
import { AuthReducer } from "../auth/auth.reducer";
import { CartReducer } from "../cart/cart.reducer";
import { ToastReducer } from "../toast/toast.reducer";
const reducer = combineReducers({ cartState: CartReducer, adDetailState: AdDetailReducer, authState: AuthReducer, toastState: ToastReducer });
const middleware = [thunk];
const initState = {};
const MergedStore = legacy_createStore(
  reducer,
  initState,
  applyMiddleware(...middleware)
);
export default MergedStore;
