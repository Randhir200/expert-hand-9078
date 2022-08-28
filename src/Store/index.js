import {
  applyMiddleware,
    combineReducers,
    legacy_createStore,
   
  } from "redux";

import thunk from "redux-thunk"
import loginreducer from "../pages/login/Reducer/Loginreducer";
import { Taskreducer } from "../pages/Timetrak/Reducer/reducer";




const rootreducer = combineReducers({login:loginreducer,task:Taskreducer})
const store = legacy_createStore(rootreducer,applyMiddleware(thunk))


export {store}