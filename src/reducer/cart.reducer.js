import {ADD_TO_CART , REMOVE_FROM_CART  , PLACE_ORDER , RELOAD_CART} from '../constant/cart.constant'

const initialState = {
    cartProduct:[],
    reload: false
}

const cartReducer = (state = initialState , action) => {
    const {type , payload} = action
    switch (type) {
        case ADD_TO_CART:
            return {
                ...state, cartProduct: payload
            }
        case REMOVE_FROM_CART:
            return {
                ...state, cartProduct: payload
            }
        case RELOAD_CART:
            return{
                ...state, reload: !state?.reload
            }
        default:
            return state;
    }
}

export default cartReducer;