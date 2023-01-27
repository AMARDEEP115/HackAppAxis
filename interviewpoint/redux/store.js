import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { Thunk } from "redux-thunk";

const rootReducer = combineReducers({});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
