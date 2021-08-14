import {combineReducers} from 'redux'
import productReducer from './Product/productReducer'

export default combineReducers({
    product : productReducer
})