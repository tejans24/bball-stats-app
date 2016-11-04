import { combineReducers } from 'redux'
import app from './app'
import standings from './standings'

const reducers = combineReducers({
  app: app,
  standings: standings
})

export default reducers;