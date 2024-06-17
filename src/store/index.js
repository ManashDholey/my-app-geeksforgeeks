import { createStore,applyMiddleware } from "redux";
import  thunk  from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from '../reducers/index'

console.log('mainReducer:', mainReducer);
console.log('composeWithDevTools:', composeWithDevTools);
console.log('thunk middleware:', thunk);
const initialState = {
    // items: [],
    // totalAmount: 0
};
let store;
try{
     store = createStore(
    mainReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)));
   
console.log('store:', store);
}catch (error) {
    console.log('Error creating store:', error);
}
export default store;

