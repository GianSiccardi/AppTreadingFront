import authReducer from "./Auth/Reducer";

import {combineReducers, legacy_createStore, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import coinReducer from "./Coin/Reducer";
import walletReducer from "./Wallet/Reducer";
import withdrawalReducer from "./WithDrawal/Reducer";

const rootReducer=combineReducers({
auth:authReducer,
coin:coinReducer,
wallet:walletReducer,
withdrawal:withdrawalReducer
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))