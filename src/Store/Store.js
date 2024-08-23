import authReducer from "./Auth/Reducer";

import {combineReducers, legacy_createStore, applyMiddleware}from "redux";
const { thunk } = require("redux-thunk");

const rootReducer=combineReducers({
auth:authReducer
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))