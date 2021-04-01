import {ADD_TO_CART, REMOVE_FROM_CART} from '../constant/cart.constant'
import {LOADING_START , LOADING_END} from '../constant/global.constant'
import {db} from '../config/firebase'

export const AddToCart = (uid,data) => dispatch =>{
    dispatch({
        type: LOADING_START,
        payload: null
    })
    console.log(uid);
    console.log(data);
    // db.collection("cart")
    // .doc()
    // dispatch({
    //     type:ADD_TO_CART,
    //     payload:data
    // })
    dispatch({
        type: LOADING_END,
        payload: null
    })
}