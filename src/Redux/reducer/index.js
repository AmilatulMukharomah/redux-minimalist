import { combineReducers } from 'redux'
import login from './login'
import cart from "./cart";

const appReducer = combineReducers({
    login,
    cart
})

export default appReducer