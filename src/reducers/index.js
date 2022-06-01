import { combineReducers } from 'redux'
import counter from './counter'
import login from './login'
const reducers = combineReducers({
    counter: counter,
    login: login
})

export default reducers