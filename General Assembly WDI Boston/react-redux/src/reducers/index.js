import { combineReducers } from 'redux'
import { user } from './user'
import { alerts } from './alerts'
import { status } from './status'

const rootReducer = combineReducers({
  user,
  alerts,
  status
})

export default rootReducer
