import { combineReducers } from 'redux'
import productReducer from './productReducer'
import { selectedProduct } from './productReducer'

const reducers = combineReducers({
    productReducer: productReducer,
    selectedProduct: selectedProduct

})

export default reducers