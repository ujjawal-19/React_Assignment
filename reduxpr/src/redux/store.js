import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import Reduce from "./Count/Reduce";


const store = createStore(Reduce, composeWithDevTools(applyMiddleware(logger)));

export default store;
