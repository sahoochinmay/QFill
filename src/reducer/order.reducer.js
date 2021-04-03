import {FETCH_ORDER , PLACE_ORDER} from '../constant/order.constant'

const initialState = {
    orderList: []
}

const orderReducer = (state = initialState , action) =>{
    const {type ,payload} = action
    switch (type) {
        case FETCH_ORDER:
            return {
                ...state, orderList: payload
            }
        case PLACE_ORDER:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default orderReducer;