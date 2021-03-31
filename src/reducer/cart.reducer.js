import {ADD_TO_CART , REMOVE_FROM_CART  , PLACE_ORDER} from '../constant/cart.constant'

const initialState = {
    cartProduct:[]
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
        default:
            return state;
    }
}

export default cartReducer;