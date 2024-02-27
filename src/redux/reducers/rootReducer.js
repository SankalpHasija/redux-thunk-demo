import {combineReducers} from "redux";
import cartReducer from "./cartReducer";
import {productReducer} from "./productReducer";

export const rootReducer = combineReducers({
  cartItems: cartReducer,
  productsData: productReducer
})