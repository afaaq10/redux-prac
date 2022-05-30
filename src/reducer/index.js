import counter from './counter'
import login from './login'
import { combineReducers } from 'redux'

const combine = combineReducers({
    counter: counter,
    login: login
})

export default combine