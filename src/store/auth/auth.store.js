import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./auth.reducer";
const reducer = combineReducers({ authState: AuthReducer });
const middleware = [thunk];
const initState = {};
const AuthStore = legacy_createStore(
  reducer,
  initState,
  applyMiddleware(...middleware)
);
export default AuthStore;
