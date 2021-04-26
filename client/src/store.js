import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {productListReducer, productDetailsReducer} from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import { orderCreateReducer } from './reducers/orderReducers';
import { userDetailsReducer, userLoginReducer, userProfileUpdateReducer, userRegisterReducer } from './reducers/userReducers';


const reducer = combineReducers({
    productList : productListReducer,
    currentProduct: productDetailsReducer,
    cart: cartReducer,
    currentUser: userLoginReducer,
    registeredUser: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userProfileUpdateReducer,
    orderCreate: orderCreateReducer
});

const cartItemsLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const userInfoLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const shippingAddressLocalStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};

const initialState= {
    cart: {cartItems: cartItemsLocalStorage, shippingAddress: shippingAddressLocalStorage,},
    currentUser: {userInfo: userInfoLocalStorage},
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;