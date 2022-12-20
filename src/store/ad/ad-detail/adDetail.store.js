import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AdDetailReducer } from "./adDetail.reducer";
const reducer = combineReducers({ adDetailState: AdDetailReducer });
const middleware = [thunk];
const initState = {};
const AdDetailStore = legacy_createStore(
  reducer,
  initState,
  applyMiddleware(...middleware)
);
export default AdDetailStore;
