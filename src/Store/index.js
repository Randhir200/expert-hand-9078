import {
  applyMiddleware,
    combineReducers,
    legacy_createStore,
   
  } from "redux";

import thunk from "redux-thunk"
import loginreducer from "../pages/login/Reducer/Loginreducer";




const rootreducer = combineReducers({login:loginreducer})
const store = legacy_createStore(rootreducer,applyMiddleware(thunk))


export {store}