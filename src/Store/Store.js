import authReducer from "./Auth/Reducer";

import {combineReducers, legacy_createStore, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import coinReducer from "./Coin/Reducer";
import walletReducer from "./Wallet/Reducer";
import withdrawalReducer from "./WithDrawal/Reducer";
import orderReducer from "./Order/Reducer";
import assetReducer from "./Asset/Reducer";
import watchlistReducer from "./WatchList/Reducer";

const rootReducer=combineReducers({
auth:authReducer,
coin:coinReducer,
wallet:walletReducer,
withdrawal:withdrawalReducer,
order:orderReducer,
asset:assetReducer,
watchlist:watchlistReducer

})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))