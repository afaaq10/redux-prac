import counter from './counter'
import login from './login'
import table from './table'
import { combineReducers } from 'redux'

const combine = combineReducers({
    counter: counter,
    login: login,
    table: table
})

export default combine