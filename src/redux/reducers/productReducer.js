import { ActionTypes } from '../constants/action-types'
const initialState = {

    product: []

}
const productReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return { ...state, product: payload }

        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, product: payload }

        default:
            return state;
    }

}
export const selectedProduct = (state = {}, { type, payload }) => {

    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}

        default:
            return state;
    }

}

export default productReducer


