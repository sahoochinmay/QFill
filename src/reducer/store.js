import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import storage from 'redux-persist/lib/storage'
import {persistReducer } from 'redux-persist'

import authReducer from './auth.reducer'
import globalReducer from './global.reducer'
import cartReducer from './cart.reducer'
const reducers =persistReducer({storage: storage,key:'ebs' }, combineReducers({
  authReducer,
  globalReducer,
  cartReducer
}));

let middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

export const store = createStore(reducers, {}, applyMiddleware(...middleware));
