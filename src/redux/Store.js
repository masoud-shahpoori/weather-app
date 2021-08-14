import {createStore,applyMiddleware} from 'redux'
import rootReducer from './Reducer/rootReducer'
import thunk from 'redux-thunk';

const middleware = []

const store = createStore(rootReducer,applyMiddleware(...middleware,thunk))

export default store