import { combineReducers } from 'redux'
import contactsReducer from './contactsReducer'
import newReducer from './newReducer'

const rootReducer = combineReducers({
  // can be accesible as contacts from state object ?
  contacts: contactsReducer,
  new: newReducer
})

export default rootReducer
