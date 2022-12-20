import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AdListReducer } from "./adList.reducer";
const reducer = combineReducers({ adListState: AdListReducer });
const middleware = [thunk];
const initState = {};
const AdListStore = legacy_createStore(
  reducer,
  initState,
  applyMiddleware(...middleware)
);
export default AdListStore;
