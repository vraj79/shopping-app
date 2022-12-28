import {legacy_createStore,combineReducers} from 'redux'
import CartReducer from './cart/CartReducer'
import { AuthReducer } from './auth/AuthReducer'

const rootReducer=combineReducers({CartReducer,AuthReducer})

export const store=legacy_createStore(rootReducer)